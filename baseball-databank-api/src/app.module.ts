import { Module } from '@nestjs/common';
import { PlayersModule } from './players/players.module';
import { FranchisesModule } from './franchises/franchises.module';
import { ManagersModule } from './managers/managers.module';
import { SeasonsModule } from './seasons/seasons.module';
import { BattingModule } from './batting/batting.module';
import { FieldingModule } from './fielding/fielding.module';
import { PitchingModule } from './pitching/pitching.module';
import { AwardsModule } from './awards/awards.module';
import { HalloffameModule } from './halloffame/halloffame.module';

@Module({
    imports: [PlayersModule, FieldingModule, FranchisesModule, ManagersModule, SeasonsModule, BattingModule, PitchingModule,
        AwardsModule, HalloffameModule],
})
export class ApplicationModule {}
