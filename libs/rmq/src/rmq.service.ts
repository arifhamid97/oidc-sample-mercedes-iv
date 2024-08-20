import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RmqOptions, Transport } from '@nestjs/microservices';

@Injectable()
export class RmqService {

    constructor(private readonly configservice: ConfigService){}

    getOptions(queue:string, noAck=false):RmqOptions {
        return{
            transport:Transport.RMQ,
            options:{
                urls:[this.configservice.get<string>('RABBIT_MQ_URI')],
                queue:this.configservice.get<string>(`RABBIT_MQ_${queue}_QUEUE`),
                noAck,
                persistent:true
            }
        }
    }


}
