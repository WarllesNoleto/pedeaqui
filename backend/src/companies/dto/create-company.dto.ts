import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateCompanyDto {
  @IsString()
  name!: string;
  @IsString()
  phone!: string;
  @IsString()
  address!: string;
  @IsOptional() @IsString() logo?: string;
  @IsString() slug!: string;
  @IsBoolean() active!: boolean;
}
