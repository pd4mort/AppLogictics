import { Module } from '@nestjs/common';
import { LogisticsCompaniesService } from './logistics-companies.service';
import { LogisticsCompaniesController } from './logistics-companies.controller';
import { LogisticsCompany } from './entities/logistics-company.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LogisticsCompany])],
  controllers: [LogisticsCompaniesController],
  providers: [LogisticsCompaniesService],
})
export class LogisticsCompaniesModule {}
