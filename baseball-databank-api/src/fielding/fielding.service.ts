import { Injectable } from '@nestjs/common';
import { Fielding } from './dto/fielding.dto';
import { FieldingPost } from './dto/fieldingPost.dto';

@Injectable()
export class FieldingService {
    async getCareerStatsById(id: string): Promise<any> {
        return Fielding.findAll({ where: { playerID : id }, order: [ ['yearID', 'DESC'],  [ 'stint', 'DESC' ]] , limit: 35});
    }

    async getStatsByIdAndSeason(id: string, season: number): Promise<any> {
        return Fielding.findAll({ where: { playerID : id, yearID: season }, order: [ [ 'stint', 'DESC' ]] });
    }

    async getCareerPostSeasonStatsById(id: string): Promise<any> {
        return FieldingPost.findAll({ where: { playerID : id }, order: [ ['yearID', 'DESC'],  [ 'round', 'DESC' ]] , limit: 35});
    }

    async getPostSeasonStatsByIdAndSeason(id: string, season: number): Promise<any> {
        return FieldingPost.findAll({ where: { playerID : id, yearID: season }, order: [ [ 'round', 'DESC' ]] });
    }
}
