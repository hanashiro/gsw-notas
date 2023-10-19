// import { BankPageStore } from './Bank.store';

import { IndexPageLogic } from '@partials/index/Index.logic';
import { ApiService } from '@services/Api/ApiService';
import { BankNoteInterface } from '@typing/Client';

export class BankPageLogic {
    static async withdraw(
        name: string,
        amount: number,
    ): Promise<null | BankNoteInterface[]> {
        const response = await ApiService.patch<BankNoteInterface[]>(
            `/clients/${name}`,
            {
                amount,
            },
        );

        if (!response) {
            return null;
        }

        await IndexPageLogic.login(name);

        await new Promise((resolve) => setTimeout(resolve, 1000));

        return response.data;
    }
}
