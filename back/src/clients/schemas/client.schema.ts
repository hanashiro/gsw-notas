import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClientDocument = Client & Document;

@Schema({
    timestamps: true,
    collection: 'Clients',
})
export class Client {
    @Prop()
    name: string;

    @Prop()
    total: number;

    @Prop()
    withdrawals: {
        date: Date;
        amount: number;
    }[];
}

export const ClientsSchema = SchemaFactory.createForClass(Client);
