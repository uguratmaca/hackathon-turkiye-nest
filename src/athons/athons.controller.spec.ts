import { Test, TestingModule } from '@nestjs/testing';
import { AthonsController } from './athons.controller';

describe('AthonsController', () => {
  let controller: AthonsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AthonsController],
    }).compile();

    controller = module.get<AthonsController>(AthonsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
