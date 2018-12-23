import {Controller, Get, Param} from '@nestjs/common';
import {ManagersService} from './managers.service';

@Controller('managers')
export class ManagersController {
    constructor(private readonly managersService: ManagersService) {}

    @Get()
    findAll(): string {
        return this.managersService.getManagers().then((managers) => {
            return {results: managers};
        });
    }

    @Get(':id')
    findOne(@Param('id') id): any {
        return this.managersService.getManagerById(id).then((mgr) => {
            return {results: mgr};
        });
    }

}