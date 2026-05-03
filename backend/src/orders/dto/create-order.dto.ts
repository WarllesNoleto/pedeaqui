import { IsArray, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsString() companyId!: string;
  @IsString() channel!: 'balcao' | 'mesa' | 'delivery';
  @IsArray() items!: Array<{ productId: string; quantity: number; notes?: string }>;
  @IsString() paymentMethod!: string;
}
