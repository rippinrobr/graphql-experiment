import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize';
import { Manager, sequelize } from './dto/manager.dto';
import {Franchise} from '../franchises/dto/franchise.dto';

@Injectable()
export class ManagersService {
    getManagers(): any {
        return Manager.findAll();
    }

    getManagerById(id: string): any {
        return Manager.findOne({ 'where': { 'playerID' : id } });
    }
}
