import {Controller, Get, Param} from '@nestjs/common';
import {PitchingService} from './pitching.service';

@Controller('pitchingpost')
export class PitchingPostController {
    constructor(private readonly pitchingService: PitchingService) {
    }

    @Get(':id')
    findById(@Param('id') id): any {
        return this.pitchingService.getCareerPostSeasonStatsById(id).then((stats) => {
            return {results: stats};
        });
    }

    @Get(':id/:season')
    findByIdAndSeason(@Param('id') id, @Param('season') season): any {
        return this.pitchingService.getPostSeasonStatsByIdAndSeason(id, season).then((stats) => {
            return {results: stats};
        });
    }
}
