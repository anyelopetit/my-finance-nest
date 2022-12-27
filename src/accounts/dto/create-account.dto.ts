import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateAccountDto {
  @IsNotEmpty()
  title: string;

  @IsNumber()
  amount: number;

  color: string;
}
