import { Module } from '@nestjs/common';
import { PlayersModule } from './players/players.module';
import { FranchisesModule } from './franchises/franchises.module';
import { ManagersModule } from './managers/managers.module';
import { SeasonsModule } from './seasons/seasons.module';

@Module({
    imports: [PlayersModule, FranchisesModule, ManagersModule, SeasonsModule],
})
export class ApplicationModule {}
