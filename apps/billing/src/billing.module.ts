import { Module } from '@nestjs/common';
import { BillingController } from './billing.controller';
import { BillingService } from './billing.service';
import { DatabaseModule } from '@app/database';
import { RmqModule } from '@app/rmq';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/billing/.env',

    }),
    DatabaseModule,
    RmqModule
  ],
  controllers: [BillingController],
  providers: [BillingService],
})
export class BillingModule {}
