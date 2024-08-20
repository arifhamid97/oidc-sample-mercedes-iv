import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class OrdersService {

  constructor(@Inject('billing') private rabbitClient: ClientProxy){}


  getHello(): string {
    return 'Helloasdasda Woasdasdrld!';
  }

  placeOrder(){
    this.rabbitClient.emit('oder-placed',{name:"hi"})
    return {message:'Yes'}
  }

  test(){
    return {message:'Yes Order'}
  }


}
