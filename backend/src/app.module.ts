import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module.js';
import { UsersModule } from './users/users.module.js';
import { CompaniesModule } from './companies/companies.module.js';
import { ProductsModule } from './products/products.module.js';
import { OrdersModule } from './orders/orders.module.js';
import { KitchenGateway } from './kitchen/kitchen.gateway.js';
import { CheckoutModule } from './checkout/checkout.module.js';
import { PublicMenuModule } from './public-menu/public-menu.module.js';
@Module({imports:[MongooseModule.forRoot(process.env.MONGO_URI as string),AuthModule,UsersModule,CompaniesModule,ProductsModule,OrdersModule,CheckoutModule,PublicMenuModule],providers:[KitchenGateway]})
export class AppModule {}
