import { Injectable } from '@nestjs/common';

@Injectable()
export class AboutService {

    about() {
        return {
            title: 'About Page',
            description: 'test it '
        };
    }
}
