import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto.js';

@Injectable()
export class ProductsService {
  private readonly products: any[] = [];

  create(payload: CreateProductDto) {
    const product = { id: crypto.randomUUID(), active: true, ...payload };
    this.products.push(product);
    return product;
  }

  list(companyId: string) {
    return this.products.filter((p) => p.companyId === companyId);
  }
}
