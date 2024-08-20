import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class AuthService {

  constructor(private readonly configService: ConfigService){}

  async exchangeCodeForToken(code: string) {

     
    const url = this.configService.get<string>('OIDC_URL');
    const headers = { 'content-type': 'application/json' };
    const body = {
      grant_type: 'authorization_code',
      client_id: this.configService.get<string>('CLIENT_ID'),
      client_secret: this.configService.get<string>('CLIENT_SECRET'),
      code,
      audience: 'https://clientcredentials.com',
      redirect_uri:"http://localhost:9080/auth/v1/callback"
    };

    return axios.post(url, body, { headers });
  }
}
