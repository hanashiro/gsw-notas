import { FormatterService } from './FormatterService';

describe('FormatterService', () => {
    it('should test number formmater', () => {
        expect(FormatterService.currency(123)).toBe('R$ 123,00');
        expect(FormatterService.currency(1234.56)).toBe('R$ 1.234,56');
    });
});
