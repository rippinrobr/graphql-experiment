import {Controller, Get, Param} from '@nestjs/common';
import {BattingService} from './batting.service';

@Controller('batting')
export class BattingController {
    constructor(private readonly battingService: BattingService) {}

    @Get(':id')
    findAll(@Param('id') id): any {
        return this.battingService.getCareerBattingStatsById(id).then((stats) => {
            return {results: stats};
        });
    }

    @Get(':id/:season')
    findOne(@Param('id') id, @Param('season') season): any {
        return this.battingService.getBattingStatsByIdAndSeason(id, season).then((stats) => {
            return {results: stats};
        });
    }
}