import { Injectable } from '@nestjs/common';
import { Franchise } from './dto/franchise.dto';

@Injectable()
export class FranchisesService {
    getfranchises(): any {
        return Franchise.findAll();
    }

    async getFranchiseById(id: string): Promise<any> {
        return Franchise.findOne({ 'where': { 'franchID' : id } });
    }
}
