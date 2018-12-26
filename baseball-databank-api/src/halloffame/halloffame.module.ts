import { Module } from '@nestjs/common';
import { HallOfFameService } from './halloffame.service';
import { HallOfFameController } from './halloffame.controller';

@Module({
  providers: [HallOfFameService],
  controllers: [HallOfFameController]
})
export class HalloffameModule {}
