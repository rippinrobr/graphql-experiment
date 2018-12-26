import { Injectable } from '@nestjs/common';
import { Player } from './dto/player.dto';

@Injectable()
export class PlayersService {
   async getPlayers(): Promise<any> {
        return Player.findAll({limit: 35});
    }

    async getPlayerById(id: string): Promise<any> {
        return Player.findOne({ where: { playerID : id } });
    }
}
