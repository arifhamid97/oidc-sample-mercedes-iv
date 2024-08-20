import { NestFactory } from '@nestjs/core';
import { OrdersModule } from './orders.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(OrdersModule);
  const configService = app.get(ConfigService);
  const port = configService.get('PORT')
  app.setGlobalPrefix('orders/v1')
  await app.listen(port,()=>{console.log("Orders is running")})
  
}
bootstrap();


