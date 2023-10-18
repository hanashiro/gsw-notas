import { Test, TestingModule } from '@nestjs/testing';
import { ClientsService } from './clients.service';
import { getModelToken } from '@nestjs/mongoose';
import { Client, ClientDocument } from './schemas/client.schema';
import { Model } from 'mongoose';
import { readFile } from 'fs/promises';
import { resolve } from 'path';

describe('ClientsService', () => {
    let service: ClientsService;
    let clients: Client[];

    beforeAll(async () => {
        clients = JSON.parse(
            (
                await readFile(
                    resolve(
                        __dirname,
                        './mock/clients-list-no-withdrawals.json',
                    ),
                    'utf8',
                )
            ).toString(),
        );
    });

    beforeEach(async () => {
        const mockClientModel: Partial<Model<ClientDocument>> = {
            findOne: jest
                .fn()
                .mockImplementation(async ({ name }: { name: string }) => {
                    return clients.find((client) => client.name === name);
                }),
            updateOne: jest.fn(),
        };

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ClientsService,
                {
                    provide: getModelToken(Client.name),
                    useValue: mockClientModel,
                },
            ],
        }).compile();
        // .overrideProvider(getModelToken(Client.name))
        // .useValue({
        //     findOne: async (name: string): Promise<Client | {}> => {
        //         if (name === 'Jack') {
        //             return clients[0];
        //         }
        //         return {};
        //     },
        //     updateOne: () => {},
        // })
        // .compile();
        service = module.get<ClientsService>(ClientsService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should return an empty object if the client is not found', async () => {
        const client = await service.findOne('Jack123');
        expect(client).toEqual({});
    });

    it('should return the client if the client is found', async () => {
        const client = await service.findOne('Jack');
        expect(client).toEqual(clients[0]);
    });

    it('should return the less banknotes possible', async () => {
        {
            const amount = 100;
            expect(service.getMoney(amount)).toEqual([
                {
                    value: 100,
                    amount: 1,
                },
            ]);
        }
        {
            const amount = 60;
            expect(service.getMoney(amount)).toEqual([
                {
                    value: 50,
                    amount: 1,
                },
                {
                    value: 10,
                    amount: 1,
                },
            ]);
        }
        {
            const amount = 30;
            expect(service.getMoney(amount)).toEqual([
                {
                    value: 20,
                    amount: 1,
                },
                {
                    value: 10,
                    amount: 1,
                },
            ]);
        }
        {
            const amount = 80;
            expect(service.getMoney(amount)).toEqual([
                {
                    value: 50,
                    amount: 1,
                },
                {
                    value: 20,
                    amount: 1,
                },
                {
                    value: 10,
                    amount: 1,
                },
            ]);
        }
        {
            const amount = 90;
            expect(service.getMoney(amount)).toEqual([
                {
                    value: 50,
                    amount: 1,
                },
                {
                    value: 20,
                    amount: 2,
                },
            ]);
        }
        {
            const amount = 5;
            expect(() => service.getMoney(amount)).toThrow();
        }
    });

    it('should try to update the client and throw an error for client not found', async () => {
        expect(service.update('Jack123', 100_000_000)).rejects.toThrow(
            'Client not found',
        );
    });

    it('should try to update the client and throw an error for no banknotes available', async () => {
        expect(service.update('Jack', 5)).rejects.toThrow();
    });

    it('should try to update the client and throw an error for insufficient funds', async () => {
        expect(service.update('Jack', 100_000_000)).rejects.toThrow(
            'Not enough money',
        );
    });

    it('should update the client and return the banknotes', async () => {
        expect(await service.update('Jack', 100)).toEqual([
            {
                value: 100,
                amount: 1,
            },
        ]);
    });
});
