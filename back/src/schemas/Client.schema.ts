import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClientDocument = Client & Document;

@Schema({
    timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class Client {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    total: number;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
