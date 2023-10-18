import { Test, TestingModule } from '@nestjs/testing';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';

describe('ClientsController', () => {
    let controller: ClientsController;
    let service: ClientsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ClientsController],
            providers: [
                {
                    provide: ClientsService,
                    useValue: {
                        findOne: jest.fn(),
                        update: jest.fn(),
                    },
                },
            ],
        }).compile();
        controller = module.get<ClientsController>(ClientsController);
        service = module.get<ClientsService>(ClientsService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    it('should call service.findOne with the correct parameter', () => {
        const spy = jest.spyOn(service, 'findOne');
        const name = 'testName';
        controller.findOne(name);
        expect(spy).toHaveBeenCalledWith(name);
    });

    it('should call service.update with the correct parameters', () => {
        const spy = jest.spyOn(service, 'update');
        const name = 'testName';
        const amount = 100;
        controller.update(name, amount);
        expect(spy).toHaveBeenCalledWith(name, amount);
    });
});
