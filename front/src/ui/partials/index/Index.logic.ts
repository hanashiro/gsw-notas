import { IndexPageStore } from './Index.store';

import { ApiService } from '@services/Api/ApiService';
import { ClientInterface } from '@typing/Client';

export class IndexPageLogic {
    static async login(name: string) {
        const response = await ApiService.get<ClientInterface>(
            `/clients/${name}`,
        );

        if (response.data?.name) {
            IndexPageStore.set.user(response.data);
            return response.data;
        }
        IndexPageStore.set.user(null);
        return null;
    }
}
