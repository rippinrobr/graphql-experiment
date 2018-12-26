import {Controller, Get, Param} from '@nestjs/common';
import {BattingService} from './batting.service';

@Controller('battingpost')
export class BattingPostController {
    constructor(private readonly battingService: BattingService) {}

    @Get(':id')
    findAll(@Param('id') id): any {
        return this.battingService.getCareerPostSeasonStatsById(id).then((stats) => {
            return {results: stats};
        });
    }

    @Get(':id/:season')
    findOne(@Param('id') id, @Param('season') season): any {
        return this.battingService.getPostSeasonStatsByIdAndSeason(id, season).then((stats) => {
            return {results: stats};
        });
    }
}