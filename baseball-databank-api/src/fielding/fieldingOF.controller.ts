import {Controller, Get, Param} from '@nestjs/common';
import {FieldingService} from './fielding.service';

@Controller('fieldingof')
export class FieldingOFController {
    constructor(private readonly fieldingService: FieldingService) {}

    @Get(':id')
    findById(@Param('id') id): any {
        return this.fieldingService.getCareerOFStatsById(id).then((stats) => {
            return {results: stats};
        });
    }

    @Get(':id/:season')
    findByIdAndSeason(@Param('id') id, @Param('season') season): any {
        return this.fieldingService.getOFStatsByIdAndSeason(id, season).then((stats) => {
            return {results: stats};
        });
    }
}
