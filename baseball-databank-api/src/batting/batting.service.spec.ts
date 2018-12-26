import { Test, TestingModule } from '@nestjs/testing';
import { BattingService } from './batting.service';

describe('BattingService', () => {
  let service: BattingService;
  
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BattingService],
    }).compile();
    service = module.get<BattingService>(BattingService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
