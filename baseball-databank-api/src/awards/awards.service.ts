import { Injectable } from '@nestjs/common';
import { AwardsPlayer} from './dto/awardsPlayers.dto';

@Injectable()
export class AwardsService {
    async getCareerAwardsById(id: string): Promise<any> {
        return AwardsPlayer.findAll({where: {playerID: id}, order: [['yearID', 'DESC'], ['lgID', 'ASC'], ['awardID', 'ASC']], limit: 35});
    }

    async getAwardsByIdAndSeason(id: string, season: number): Promise<any> {
        return AwardsPlayer.findAll({where: {playerID: id, yearID: season}, order: [['lgID', 'ASC'], ['awardID', 'ASC']]});
    }

}
