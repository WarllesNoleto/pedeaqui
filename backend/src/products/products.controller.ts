import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto.js';
import { ProductsService } from './products.service.js';

@Controller('products')
export class ProductsController {
  constructor(private readonly service: ProductsService) {}

  @Post()
  create(@Body() dto: CreateProductDto) {
    return this.service.create(dto);
  }

  @Get()
  list(@Query('companyId') companyId: string) {
    return this.service.list(companyId);
  }
}
