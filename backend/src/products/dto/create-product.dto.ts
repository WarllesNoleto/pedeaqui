import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString() companyId!: string;
  @IsString() category!: string;
  @IsString() name!: string;
  @IsOptional() @IsString() description?: string;
  @IsNumber() price!: number;
  @IsOptional() @IsString() image?: string;
  @IsArray() additions!: { name: string; price: number }[];
}
