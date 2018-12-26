import { Module } from '@nestjs/common';
import { FieldingController } from './Fielding.controller';
import { FieldingPostController } from './FieldingPost.controller';
import { FieldingService } from './Fielding.service';
import {FieldingOFController} from './fieldingOF.controller';
import {FieldingOFSplitsController} from './fieldingOFSplits.controller';

@Module({
  controllers: [FieldingController, FieldingOFController, FieldingOFSplitsController, FieldingPostController],
  providers: [FieldingService],
})

export class FieldingModule {}
