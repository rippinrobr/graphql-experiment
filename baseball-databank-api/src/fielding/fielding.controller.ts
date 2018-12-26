import {Controller, Get, Param} from '@nestjs/common';
import {FieldingService} from './fielding.service';

@Controller('fielding')
export class FieldingController {
    constructor(private readonly fieldingService: FieldingService) {}

    @Get(':id')
    findById(@Param('id') id): any {
        return this.fieldingService.getCareerStatsById(id).then((stats) => {
            return {results: stats};
        });
    }

    @Get(':id/:season')
    findByIdAndSeason(@Param('id') id, @Param('season') season): any {
        return this.fieldingService.getStatsByIdAndSeason(id, season).then((stats) => {
            return {results: stats};
        });
    }

    @Get(':id')
    findAll(@Param('id') id): any {
        return this.fieldingService.getCareerStatsById(id).then((stats) => {
            return {results: stats};
        });
    }

    @Get(':id/:season')
    findOne(@Param('id') id, @Param('season') season): any {
        return this.fieldingService.getStatsByIdAndSeason(id, season).then((stats) => {
            return {results: stats};
        });
    }
}
