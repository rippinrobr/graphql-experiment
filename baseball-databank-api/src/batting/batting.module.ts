import { Module } from '@nestjs/common';
import { BattingController } from './batting.controller';
import { BattingPostController } from './battingPost.controller';
import { BattingService } from './batting.service';

@Module({
  controllers: [BattingController, BattingPostController],
  providers: [BattingService],
})

export class BattingModule {}
