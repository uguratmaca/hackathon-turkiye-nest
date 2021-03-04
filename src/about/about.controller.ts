import { Controller, Get, Render } from '@nestjs/common';

@Controller('hakkinda')
export class AboutController {

    @Get()
    @Render('about')
    about() {
        return {
            title: 'About Page',
            description: 'test it 22'
        };
    }
}
