export interface ClientInterface {
    name: string;
    total: number;
    withdrawals: WithdrawalInterface[];
}

export interface WithdrawalInterface {
    date: string;
    amount: number;
}

export interface BankNoteInterface {
    value: number;
    amount: number;
}
