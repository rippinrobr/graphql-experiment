import { Injectable } from '@nestjs/common';
import { Pitching } from './dto/Pitching.dto';
import { PitchingPost } from './dto/PitchingPost.dto';

@Injectable()
export class PitchingService {
    async getCareerStatsById(id: string): Promise<any> {
        return Pitching.findAll({where: {playerID: id}, order: [['yearID', 'DESC'], ['stint', 'DESC']], limit: 35});
    }

    async getStatsByIdAndSeason(id: string, season: number): Promise<any> {
        return Pitching.findAll({where: {playerID: id, yearID: season}, order: [['stint', 'DESC']]});
    }

    async getCareerPostSeasonStatsById(id: string): Promise<any> {
        return PitchingPost.findAll({where: {playerID: id}, order: [['yearID', 'DESC'], ['round', 'DESC']], limit: 35});
    }

    async getPostSeasonStatsByIdAndSeason(id: string, season: number): Promise<any> {
        return PitchingPost.findAll({where: {playerID: id, yearID: season}, order: [['round', 'DESC']]});
    }
}