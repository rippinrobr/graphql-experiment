import { Module } from '@nestjs/common';
import { PitchingService } from './pitching.service';
import { PitchingController } from './pitching.controller';
import { PitchingPostController } from './pitchingPost.controller';

@Module({
  providers: [PitchingService],
  controllers: [PitchingController, PitchingPostController],
})
export class PitchingModule {}
