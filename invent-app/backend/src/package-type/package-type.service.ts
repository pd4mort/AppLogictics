import { Injectable } from '@nestjs/common';
import { CreatePackageTypeDto } from './dto/create-package-type.dto';
import { UpdatePackageTypeDto } from './dto/update-package-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PackageType } from './entities/package-type.entity';

@Injectable()
export class PackageTypeService {

  constructor(
    @InjectRepository(PackageType)
    private typeRepository: Repository<PackageType>
  ){}
  
  async create(createPackageTypeDto: CreatePackageTypeDto) {
    return await this.typeRepository.save(createPackageTypeDto);
  }

  async findAll() {
    return await this.typeRepository.find();
  }

  async findOne(id: number) {
    return await this.typeRepository.findOneBy({ id });
  }

  async update(id: number, updatePackageTypeDto: UpdatePackageTypeDto) {
    return this.typeRepository.update(id, updatePackageTypeDto);
  }

  async remove(id: number) {
    return await this.typeRepository.softDelete({ id });
  }
}
