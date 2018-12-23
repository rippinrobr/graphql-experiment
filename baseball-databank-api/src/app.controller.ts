import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {PlayersService} from './players/players.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll(): string {
    return this.appService.getHello();
  }
}
