import { Test, TestingModule } from '@nestjs/testing';
import { LogisticsCompaniesService } from './logistics-companies.service';

describe('LogisticsCompaniesService', () => {
  let service: LogisticsCompaniesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogisticsCompaniesService],
    }).compile();

    service = module.get<LogisticsCompaniesService>(LogisticsCompaniesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
