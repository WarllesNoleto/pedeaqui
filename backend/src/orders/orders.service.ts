import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto.js';

@Injectable()
export class OrdersService {
  private readonly orders: any[] = [];

  create(payload: CreateOrderDto) {
    const order = { id: crypto.randomUUID(), status: 'novo', createdAt: new Date().toISOString(), ...payload };
    this.orders.push(order);
    return order;
  }

  list(companyId: string) {
    return this.orders.filter((o) => o.companyId === companyId);
  }
}
