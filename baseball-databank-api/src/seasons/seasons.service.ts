import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize';
import { Season } from './dto/season.dto';

@Injectable()
export class SeasonsService {
    getSeasons(): any {
        return Season.findAll({limit:35});
    }

    getSeasonByYear(year: number): any {
        return Season.findAll({where: {yearID: year}});
    }
}
