import {Controller, Get, Param} from '@nestjs/common';
import {AwardsService} from './awards.service';

@Controller('awards/players')
export class AwardsController {
    constructor(private readonly awardsService: AwardsService) {
    }

    @Get(':id')
    findById(@Param('id') id): any {
        return this.awardsService.getCareerAwardsById(id).then((awards) => {
            return {results: awards};
        });
    }

    @Get(':id/:season')
    findByIdAndSeason(@Param('id') id, @Param('season') season): any {
        return this.awardsService.getAwardsByIdAndSeason(id, season).then((awards) => {
            return {results: awards};
        });
    }
}
