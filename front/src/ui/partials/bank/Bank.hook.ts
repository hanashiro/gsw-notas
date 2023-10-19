import { BankPageStore } from './Bank.store';
import { BankPageLogic } from './Bank.logic';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { IndexPageStore } from '@partials/index/Index.store';
import { BankNoteInterface } from '@typing/Client';

export function useBankPage() {
    // #region [ Local State ]
    const [selectedTab, setSelectedTab] = useState(0);
    const [amountToWithdraw, setAmountToWithdraw] = useState<number | ''>('');
    const router = useRouter();
    const user = IndexPageStore.use.user();
    const withdrawalError = useMemo(() => {
        if (user && typeof amountToWithdraw === 'number') {
            if (amountToWithdraw > user?.total) {
                return 'Quantia maior que o saldo disponível';
            }
            if (amountToWithdraw < 10) {
                return 'Quantia inválida';
            }
        }
        return '';
    }, [amountToWithdraw, user]);
    const [isLoading, setIsLoading] = useState(false);
    const [bankNotesList, setBankNotesList] = useState<BankNoteInterface[]>([]);

    // #endregion

    // #region [ Methods ]
    function updateAmountToWithdraw(amount: string) {
        amount = amount
            .replace(/[^0-9]/g, '')
            .replaceAll('.', '')
            .replaceAll(',', '')
            .replace(/^0+/, '');

        if (amount === '') {
            setAmountToWithdraw('');
            return;
        }

        const amountNumber = Number(amount);
        if (isNaN(amountNumber)) {
            setAmountToWithdraw('');
        }

        setAmountToWithdraw(amountNumber);
    }

    async function withdraw(name: string, amount: number) {
        setIsLoading(true);
        const response = await BankPageLogic.withdraw(name, amount);
        if (response) {
            setAmountToWithdraw('');
        }
        setIsLoading(false);
        setBankNotesList(response || []);
        return response;
    }

    // #endregion

    // #region [ Effects ]
    useEffect(() => {
        if (!user) {
            router.push('/');
        }
    }, [user]);
    // #endregion

    return {
        user,
        selectedTab,
        setSelectedTab,
        amountToWithdraw,
        updateAmountToWithdraw,
        withdrawalError,
        isLoading,
        withdraw,
        bankNotesList,
    };
}
