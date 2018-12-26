import {Controller, Get, Param} from '@nestjs/common';
import {HallOfFameService} from './halloffame.service';

@Controller('halloffame')
export class HallOfFameController {
    constructor(private readonly hallOfFameService: HallOfFameService) {}

    @Get(':id')
    findById(@Param('id') id): any {
        return this.hallOfFameService.getById(id).then((hof) => {
            return {results: hof};
        });
    }
}
