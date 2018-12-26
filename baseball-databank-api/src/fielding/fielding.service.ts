import { Injectable } from '@nestjs/common';
import { Fielding } from "./dto/fielding.cto";
import {Batting} from "../batting/dto/batting.dto";

@Injectable()
export class FieldingService {
    async getCareerStatsById(id: string): Promise<any> {
        return Fielding.findAll({ where: { playerID : id }, order: [ ['yearID', 'DESC'],  [ 'stint', 'DESC' ]] , limit: 35});
    }

    async getStatsByIdAndSeason(id: string, season: number): Promise<any> {
        return Fielding.findAll({ where: { playerID : id, yearID: season }, order: [ [ 'stint', 'DESC' ]] });
    }

}
