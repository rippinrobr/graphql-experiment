import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize';
import { Manager, sequelize } from './dto/manager.dto';

@Injectable()
export class ManagersService {
    getManagers(): any {
        return Manager.findAll();
    }

    getManagerById(id: string): any {
        return Manager.findAll({ 'where': { 'playerID' : id } });
    }
}
