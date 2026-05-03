import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto.js';

@Controller('auth')
export class AuthController {
  @Post('login')
  login(@Body() dto: LoginDto) {
    return {
      accessToken: 'token-demo',
      user: { id: 'u1', email: dto.email, role: 'admin_empresa', companyId: 'company-demo' }
    };
  }
}
