import { Test, TestingModule } from '@nestjs/testing';
import { FieldingController } from './fielding.controller';

describe('Fielding Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [FieldingController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: FieldingController = module.get<FieldingController>(FieldingController);
    expect(controller).toBeDefined();
  });
});
