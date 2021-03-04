import { Controller, Get, Render } from '@nestjs/common';
import { AthonsService } from "./athons.service";

@Controller('etkinlikler')
export class AthonsController {

    constructor(
        private readonly athonsService: AthonsService
    ) { }

    @Get()
    @Render('athons')
    async athons() {
        var res = await this.athonsService.getAllAthons();
        return res;
    }
}