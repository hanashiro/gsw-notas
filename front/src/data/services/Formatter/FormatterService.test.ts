import { FormatterService } from './FormatterService';

describe('FormatterService', () => {
    it('should test currency formmater', () => {
        expect(FormatterService.currency(123)).toBe('R$ 123,00');
        expect(FormatterService.currency(1234.56)).toBe('R$ 1.234,56');
    });

    it('should test date formmater', () => {
        expect(FormatterService.date('2023-10-19T01:42:18.746Z')).toBe(
            '19/10/2023, 01:42:18',
        );
    });
});
