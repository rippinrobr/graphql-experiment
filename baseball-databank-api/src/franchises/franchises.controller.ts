import {Controller, Get, Param} from '@nestjs/common';
import {FranchisesService} from './franchises.service';

@Controller('franchises')
export class FranchisesController {
    constructor(private readonly franchisesService: FranchisesService) {}

    @Get()
    findAll(): string {
        return this.franchisesService.getfranchises().then((franchises) => {
            return { results: franchises};
        });
    }

    @Get(':id')
    findOne(@Param('id') id): any {
        return this.franchisesService.getFranchiseById(id).then((franchise) => {
            return {results: franchise};
        });
    }
}