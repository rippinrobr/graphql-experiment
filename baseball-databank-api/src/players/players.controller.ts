import {Controller, Get, Param} from '@nestjs/common';
import {PlayersService} from './players.service';

@Controller('players')
export class PlayersController {
    constructor(private readonly playerService: PlayersService) {}

    @Get()
    findAll(): any {
        return this.playerService.getPlayers().then((players) => {
            return {results: players};
        });
    }

    @Get(':id')
    findOne(@Param('id') id): any {
        return this.playerService.getPlayerById(id).then((players) => {
            return {results: players};
        });
    }
}