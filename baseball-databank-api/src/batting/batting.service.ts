import { Injectable } from '@nestjs/common';
import { Batting } from './dto/batting.dto';
import { BattingPost } from './dto/battingPost.dto';

@Injectable()
export class BattingService {
    async getCareerBattingStatsById(id: string): Promise<any> {
        return Batting.findAll({ where: { playerID : id }, order: [ ['yearID', 'DESC'],  [ 'stint', 'DESC' ]] , limit: 35});
    }

    async getBattingStatsByIdAndSeason(id: string, season: number): Promise<any> {
        return Batting.findAll({ where: { playerID : id, yearID: season }, order: [ [ 'stint', 'DESC' ]] });
    }

    async getCareerPostSeasonBattingStatsById(id: string): Promise<any> {
        return BattingPost.findAll({ where: { playerID : id }, order: [ ['yearID', 'DESC'],  [ 'round', 'DESC' ]] });
    }

    async getPostSeasonBattingStatsByIdAndSeason(id: string, season: number): Promise<any> {
        return BattingPost.findOne({ where: { playerID : id, yearID: season }, order: [ ['yearID', 'DESC'],  [ 'round', 'DESC' ]]  });
    }
}
