// import { IndexPageStore } from './Index.store';
import { IndexPageLogic } from './Index.logic';

import { useState } from 'react';

export function useIndexPage() {
    // #region [ Local State ]
    const [username, setUsername] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

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

    // #endregion

    return { username, setUsername, errorMessage, login };
}
