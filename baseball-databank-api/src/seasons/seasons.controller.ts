import {Controller, Get, Param} from '@nestjs/common';
import {SeasonsService} from './seasons.service';

@Controller('seasons')
export class SeasonsController {
    constructor(private readonly seasonsService: SeasonsService) {}

    @Get()
    findAll(): string {
        return this.seasonsService.getSeasons().then((seasons) => {
            return { results: seasons[0]};
        });
    }

    @Get(':year')
    findOne(@Param('year') year): string {
        return this.seasonsService.getSeasonByYear(year).then((season) => {
            return { results: season};
        });
    }
}