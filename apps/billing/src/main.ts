import { NestFactory } from '@nestjs/core';
import { BillingModule } from './billing.module';
import { ConfigService } from '@nestjs/config';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

// async function bootstrap() {
//   const app = await NestFactory.create(BillingModule);
//   const rmqService = app.get<RmqService>(RmqService)
//   app.connectMicroservice(rmqService.getOptions('BILLING'))
//   await app.startAllMicroservices()
// }
// bootstrap();


async function bootstrap() {
  const app = await NestFactory.create(BillingModule);
  const configService = app.get(ConfigService);
  const port = configService.get('PORT')
  app.setGlobalPrefix('billing/v1')
  await app.listen(port,()=>{console.log("Billing is running")})

  
}
bootstrap();