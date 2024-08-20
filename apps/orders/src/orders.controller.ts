import { Controller, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('test')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  getHello() {
    console.log("From orders service")

    return this.ordersService.test();
  }
}
