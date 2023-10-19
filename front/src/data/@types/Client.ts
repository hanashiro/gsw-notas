export interface ClientInterface {
    name: string;
    total: number;
    withdrawals: {
        date: Date;
        amount: number;
    }[];
}
