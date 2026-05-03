import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto.js';
import { CompaniesService } from './companies.service.js';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly service: CompaniesService) {}

  @Post()
  create(@Body() dto: CreateCompanyDto) {
    return this.service.create(dto);
  }

  @Get(':slug')
  getBySlug(@Param('slug') slug: string) {
    return this.service.findBySlug(slug);
  }
}
