import { Injectable } from '@nestjs/common';
import { HallOfFame} from './dto/halloffame.dto';

@Injectable()
export class HallOfFameService {

    async getById(id: string): Promise<any> {
        return HallOfFame.findAll({ where: { 'playerID' : id }, sort: [ ['category', 'ASC'] ]});
    }
}
