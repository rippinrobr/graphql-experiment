import {Controller, Get, Param} from '@nestjs/common';
import {PitchingService} from './Pitching.service';

@Controller('pitching')
export class PitchingController {
    constructor(private readonly pitchingService: PitchingService) {
    }

    @Get(':id')
    findById(@Param('id') id): any {
        return this.pitchingService.getCareerStatsById(id).then((stats) => {
            return {results: stats};
        });
    }

    @Get(':id/:season')
    findByIdAndSeason(@Param('id') id, @Param('season') season): any {
        return this.pitchingService.getStatsByIdAndSeason(id, season).then((stats) => {
            return {results: stats};
        });
    }
}
