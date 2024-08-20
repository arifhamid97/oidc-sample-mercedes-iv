import { Body, Controller, Get, Post,Headers  } from '@nestjs/common';
import { BillingService } from './billing.service';
import { Prisma, User } from '@prisma/client';

@Controller()
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @Post('user')
  async signupUser(
    @Body() userData:Prisma.UserCreateInput,
  ): Promise<User> {
    return this.billingService.createUser(userData);
  }


  @Get()
  getHello(@Headers() headers) {


    console.log("From orders service",headers)
    return this.billingService.test();
  }

}
