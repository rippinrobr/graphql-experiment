import { Test, TestingModule } from '@nestjs/testing';
import { AwardsController } from './awards.controller';

describe('Awards Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [AwardsController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: AwardsController = module.get<AwardsController>(AwardsController);
    expect(controller).toBeDefined();
  });
});
