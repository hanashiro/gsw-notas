import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Client, ClientsSchema } from './schemas/client.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Client.name,
                schema: ClientsSchema,
            },
        ]),
    ],
    controllers: [ClientsController],
    providers: [ClientsService],
})
export class ClientsModule {}

