import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsModule } from './clients/clients.module';

const dbUser = process.env.MONGO_INITDB_ROOT_USERNAME;
const dbPass = process.env.MONGO_INITDB_ROOT_PASSWORD;
const dbHost = 'mongodb';
const dbPort = process.env.MONGO_PORT;
const dbName = process.env.MONGO_INITDB_DATABASE;
const dbAuth = process.env.MONGO_AUTH_SOURCE;

const mongoURL = `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?authSource=${dbAuth}`;

@Module({
    imports: [MongooseModule.forRoot(mongoURL), ClientsModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
