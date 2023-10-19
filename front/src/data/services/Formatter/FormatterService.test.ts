import { FormatterService } from './FormatterService';

describe('FormatterService', () => {
    it('should test currency formmater', () => {
        expect(FormatterService.currency(123)).toBe('R$ 123,00');
        expect(FormatterService.currency(1234.56)).toBe('R$ 1.234,56');
    });

    it('should test date formmater', () => {
        expect(FormatterService.date('2021-01-31 12:34:56')).toBe('31/01/2021');
    });
});
