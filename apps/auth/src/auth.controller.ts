import { Controller, Get, Query, Res } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('callback')
  async authCallback(@Query('code') code: string, @Query('state') state: string) {
    try {
      const tokenResponse = await this.authService.exchangeCodeForToken(code);
      console.log('response',tokenResponse)
      const accessToken = tokenResponse.data.access_token;
      return {accessToken:accessToken}
    } catch (error) {
      console.error('Error exchanging code for token:');
    }
  }
}

