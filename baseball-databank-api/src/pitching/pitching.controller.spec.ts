import { Test, TestingModule } from '@nestjs/testing';
import { PitchingController } from './pitching.controller';

describe('Pitching Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [PitchingController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: PitchingController = module.get<PitchingController>(PitchingController);
    expect(controller).toBeDefined();
  });
});
