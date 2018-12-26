import { Test, TestingModule } from '@nestjs/testing';
import { PitchingService } from './pitching.service';

describe('PitchingService', () => {
  let service: PitchingService;
  
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PitchingService],
    }).compile();
    service = module.get<PitchingService>(PitchingService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
