// import { IndexPageStore } from './Index.store';
import { useRouter } from 'next/router';
import { IndexPageLogic } from './Index.logic';

import { useEffect, useState } from 'react';
import { IndexPageStore } from './Index.store';

export function useIndexPage() {
    // #region [ Local State ]
    const [username, setUsername] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();
    const user = IndexPageStore.use.user();

    // #endregion

    // #region [ Methods ]
    async function login(username: string) {
        const response = await IndexPageLogic.login(username);
        if (response) {
            setErrorMessage('');
        } else {
            setErrorMessage('Usuário não encontrado');
        }
    }
    // #endregion

    // #region [ Effects ]
    useEffect(() => {
        if (user) {
            router.push('/bank');
        }
    }, [user]);

    // #endregion

    return { username, setUsername, errorMessage, login };
}
