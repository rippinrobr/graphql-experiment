import { Test, TestingModule } from '@nestjs/testing';
import { HalloffameService } from './halloffame.service';

describe('HalloffameService', () => {
  let service: HalloffameService;
  
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HalloffameService],
    }).compile();
    service = module.get<HalloffameService>(HalloffameService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
