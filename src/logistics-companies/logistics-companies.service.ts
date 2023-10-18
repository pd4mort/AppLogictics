import { Injectable } from '@nestjs/common';
import { CreateLogisticsCompanyDto } from './dto/create-logistics-company.dto';
import { UpdateLogisticsCompanyDto } from './dto/update-logistics-company.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LogisticsCompany } from './entities/logistics-company.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LogisticsCompaniesService {

  constructor(
    @InjectRepository(LogisticsCompany)
    private logisticsCompanyRepository: Repository<LogisticsCompany>
  ){}
  
  async create(createLogisticsCompanyDto: CreateLogisticsCompanyDto) {
   return await this.logisticsCompanyRepository.save(createLogisticsCompanyDto)
  }

  async findAll() {
    return await this.logisticsCompanyRepository.find();
  }

  async findOne(id: number) {
    return await this.logisticsCompanyRepository.findOneBy({id});
  }

  async update(id: number, updateLogisticsCompanyDto: UpdateLogisticsCompanyDto) {
    return this.logisticsCompanyRepository.update(id, updateLogisticsCompanyDto);
  }

  async remove(id: number) {
    return await this.logisticsCompanyRepository.softDelete({id});
  }
}
