import { Module } from '@nestjs/common';
import {FranchisesController} from './franchises.controller';
import {FranchisesService} from './franchises.service';

@Module({
    controllers: [FranchisesController],
    providers: [FranchisesService],
})
export class FranchisesModule {}
