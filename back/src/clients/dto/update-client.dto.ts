import {
    IsNotEmpty,
    IsNumber,
    IsDate,
    IsArray,
    ArrayNotEmpty,
    ArrayMinSize,
    ArrayMaxSize,
    ValidateNested,
} from 'class-validator';

export class UpdateClientDto {
    @IsNotEmpty()
    @IsNumber()
    total: number;

    @IsNotEmpty()
    @IsArray()
    @ArrayNotEmpty()
    @ValidateNested({ each: true })
    withdrawals: {
        date: Date;
        amount: number;
    }[];
}
