import {Controller, Get, Param} from '@nestjs/common';
import {FieldingService} from './fielding.service';

@Controller('fieldingofsplits')
export class FieldingOFSplitsController {
    constructor(private readonly fieldingService: FieldingService) {}

    @Get(':id')
    findById(@Param('id') id): any {
        return this.fieldingService.getCareerOFSplitsById(id).then((stats) => {
            return {results: stats};
        });
    }

    @Get(':id/:season')
    findByIdAndSeason(@Param('id') id, @Param('season') season): any {
        return this.fieldingService.getOFSplitsByIdAndSeason(id, season).then((stats) => {
            return {results: stats};
        });
    }
}
