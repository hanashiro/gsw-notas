export class FormatterService {
    static currency(value: number) {
        return Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(value);
    }
}
