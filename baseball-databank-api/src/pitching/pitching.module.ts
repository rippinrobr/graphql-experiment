import { Module } from '@nestjs/common';
import { PitchingService } from './pitching.service';
import { PitchingController } from './pitching.controller';

@Module({
  providers: [PitchingService],
  controllers: [PitchingController]
})
export class PitchingModule {}
