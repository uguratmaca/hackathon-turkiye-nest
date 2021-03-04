import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AboutController } from './about/about.controller';
import { AboutService } from './about/about.service';
import { AthonsController } from './athons/athons.controller';
import { AthonsService } from './athons/athons.service';

@Module({
  imports: [],
  controllers: [AppController, AboutController, AthonsController],
  providers: [AppService, AboutService, AthonsService],
})
export class AppModule {}
