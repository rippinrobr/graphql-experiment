import { Test, TestingModule } from '@nestjs/testing';
import { HalloffameController } from './halloffame.controller';

describe('Halloffame Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [HalloffameController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: HalloffameController = module.get<HalloffameController>(HalloffameController);
    expect(controller).toBeDefined();
  });
});
