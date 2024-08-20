import { DatabaseService } from '@app/database';
import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class BillingService {

  constructor(private db: DatabaseService) {}

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.db.user.create({
      data,
    });
  }

  test(){
    return {message:'Yes Billing'}
  }
}
