import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';
import { UserRole } from '../../common/roles.js';

export class CreateUserDto {
  @IsString()
  name!: string;

  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(6)
  password!: string;

  role!: UserRole;

  @IsOptional()
  @IsString()
  companyId?: string;
}
