import { Controller, Get, Patch, Param } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller('clients')
export class ClientsController {
    constructor(private readonly clientsService: ClientsService) {}

    @Get(':name')
    findOne(@Param('name') name: string) {
        return this.clientsService.findOne(name);
    }

    @Patch(':name')
    update(@Param('name') name: string, @Param('amount') amount: number) {
        return this.clientsService.update(name, amount);
    }
}
