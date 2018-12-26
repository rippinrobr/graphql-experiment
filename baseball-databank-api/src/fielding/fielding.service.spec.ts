import { Test, TestingModule } from '@nestjs/testing';
import { FieldingService } from './fielding.service';

describe('FieldingService', () => {
  let service: FieldingService;
  
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FieldingService],
    }).compile();
    service = module.get<FieldingService>(FieldingService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
