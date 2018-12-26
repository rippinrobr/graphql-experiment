import { Module } from '@nestjs/common';
import { FieldingController } from './Fielding.controller';
import { FieldingPostController } from './FieldingPost.controller';
import { FieldingService } from './Fielding.service';

@Module({
  controllers: [FieldingController, FieldingPostController],
  providers: [FieldingService],
})

export class FieldingModule {}
