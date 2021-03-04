import { Test, TestingModule } from '@nestjs/testing';
import { AthonsService } from './athons.service';

describe('AthonsService', () => {
  let service: AthonsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AthonsService],
    }).compile();

    service = module.get<AthonsService>(AthonsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
