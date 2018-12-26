import {Controller, Get, Param} from '@nestjs/common';
import {FieldingService} from './fielding.service';

@Controller('fieldingpost')
export class FieldingPostController {
    constructor(private readonly fieldingService: FieldingService) {}

    @Get(':id')
    findById(@Param('id') id): any {
        return this.fieldingService.getCareerPostSeasonStatsById(id).then((stats) => {
            return {results: stats};
        });
    }

    @Get(':id/:season')
    findByIdAndSeason(@Param('id') id, @Param('season') season): any {
        return this.fieldingService.getPostSeasonStatsByIdAndSeason(id, season).then((stats) => {
            return {results: stats};
        });
    }
}
