import { Test, TestingModule } from '@nestjs/testing';
import { LogisticsCompaniesController } from './logistics-companies.controller';
import { LogisticsCompaniesService } from './logistics-companies.service';

describe('LogisticsCompaniesController', () => {
  let controller: LogisticsCompaniesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogisticsCompaniesController],
      providers: [LogisticsCompaniesService],
    }).compile();

    controller = module.get<LogisticsCompaniesController>(LogisticsCompaniesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
