import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client, ClientDocument } from './schemas/client.schema';

const availableBanknotes = [100, 50, 20, 10];

@Injectable()
export class ClientsService {
    constructor(
        @InjectModel(Client.name)
        private readonly clientModel: Model<ClientDocument>,
    ) {}

    async findOne(name: string) {
        const client = await this.clientModel.findOne({ name });
        if (!client) {
            return {};
        }
        return client;
    }

    async update(name: string, amount: number) {
        const client = (await this.findOne(name)) as Client;
        if (!client.name) {
            throw new Error('Client not found');
        }
        if (amount > (client as Client).total) {
            throw new Error('Not enough money');
        }
        const banknotes = this.getMoney(amount);
        const clientWithdrawals = (client as Client).withdrawals || [];

        await this.clientModel.updateOne(
            { name },
            {
                $set: {
                    total: (client as Client).total - amount,
                    withdrawals: [
                        ...clientWithdrawals,
                        {
                            date: new Date(),
                            amount,
                        },
                    ],
                },
            },
        );

        return banknotes;
    }

    getMoney(amount: number): { value: number; amount: number }[] {
        const result: { value: number; amount: number }[] = [];

        for (const value of availableBanknotes) {
            const amountOfBanknotes = Math.floor(amount / value);
            amount = amount % value;
            if (amountOfBanknotes > 0) {
                result.push({
                    value,
                    amount: amountOfBanknotes,
                });
            }
        }

        if (amount > 0) {
            throw new Error(
                'No banknotes available for this amount. Please try again with another amount.',
            );
        }

        return result;
    }
}
