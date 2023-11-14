import { Controller, Get, Req, Session } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Session() session: Record<string, any>): string {
    session.visits = session.visits + 1;
    return session.visits;
  }
}
