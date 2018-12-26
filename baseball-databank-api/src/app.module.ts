import { Module } from '@nestjs/common';
import { PlayersModule } from './players/players.module';
import { FranchisesModule } from './franchises/franchises.module';
import { ManagersModule } from './managers/managers.module';
import { SeasonsModule } from './seasons/seasons.module';
import { BattingModule } from './batting/batting.module';
import { FieldingService } from './fielding/fielding.service';
import { FieldingController } from './fielding/fielding.controller';

@Module({
    imports: [PlayersModule, FranchisesModule, ManagersModule, SeasonsModule, BattingModule],
    providers: [FieldingService],
    controllers: [FieldingController],
})
export class ApplicationModule {}
