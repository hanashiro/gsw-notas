import { IndexPageLogic } from './Index.logic';
import { IndexPageStore } from './Index.store';
import { ApiService } from '@services/Api/ApiService';

jest.mock('@services/Api/ApiService');

describe('IndexPageLogic', () => {
    // beforeAll(() => {
    //     jest.useFakeTimers();
    //     jest.spyOn(global, 'setTimeout');
    // });
    // afterAll(() => {
    //     jest.useRealTimers();
    //     jest.clearAllTimers();
    // });
    it('should test IndexPageLogic', () => {
        // expect(true).toBe(true);
        // const spy = jest
        //     .spyOn(IndexPageLogic, IndexPageLogic.test.name as keyof typeof IndexPageLogic);
        //     .mockReturnValue(123);
        // expect(spy).toBeCalledTimes(1);
        // const mockedIndexPageLogic = jest.mocked(IndexPageLogic);
        // mockedIndexPageLogic.test.mockReturnValue(456);
    });

    it('should make a GET request to /clients with the provided name', async () => {
        const mockResponseData = { data: 'mocked response' };
        // @ts-ignore
        ApiService.get.mockResolvedValueOnce(mockResponseData);

        const name = 'testName';
        const response = await IndexPageLogic.login(name);

        expect(ApiService.get).toHaveBeenCalledWith(`/clients/${name}`);
    });

    it('should get a response and return the data', async () => {
        const mockResponseData = { data: { name: 'Jack' } };
        // @ts-ignore
        ApiService.get.mockResolvedValueOnce(mockResponseData);

        const name = 'Jack';
        const response = await IndexPageLogic.login(name);

        expect(response).toEqual(mockResponseData.data);
        expect(IndexPageStore.get.user()).toEqual(mockResponseData.data);
    });

    it('should return null if the response is empty', async () => {
        const mockResponseData = {};
        // @ts-ignore
        ApiService.get.mockResolvedValueOnce(mockResponseData);

        const name = 'Jack123';
        const response = await IndexPageLogic.login(name);

        expect(response).toBe(null);
        expect(IndexPageStore.get.user()).toBe(null);
    });
});
