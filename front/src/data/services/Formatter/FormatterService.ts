export class FormatterService {
    static currency(value: number) {
        return Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(value);
    }
    static date(value: string) {
        return Intl.DateTimeFormat('pt-BR').format(new Date(value));
    }
}
