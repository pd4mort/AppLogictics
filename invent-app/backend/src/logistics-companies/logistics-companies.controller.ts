import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LogisticsCompaniesService } from './logistics-companies.service';
import { CreateLogisticsCompanyDto } from './dto/create-logistics-company.dto';
import { UpdateLogisticsCompanyDto } from './dto/update-logistics-company.dto';
import { Role } from 'src/common/enums/rol.enum';
import { Auth } from 'src/auth/decorators/auth.decorator';


@Controller('logistics-companies')
export class LogisticsCompaniesController {
  constructor(private readonly logisticsCompaniesService: LogisticsCompaniesService) {}

  @Auth(Role.USER)
  @Post()
  create(@Body() createLogisticsCompanyDto: CreateLogisticsCompanyDto) {
    return this.logisticsCompaniesService.create(createLogisticsCompanyDto);
  }

  @Auth(Role.USER)
  @Get()
  findAll() {
    return this.logisticsCompaniesService.findAll();
  }

  @Auth(Role.USER)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.logisticsCompaniesService.findOne(+id);
  }

  @Auth(Role.USER)
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateLogisticsCompanyDto: UpdateLogisticsCompanyDto) {
    return this.logisticsCompaniesService.update(+id, updateLogisticsCompanyDto);
  }

  @Auth(Role.USER)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.logisticsCompaniesService.remove(+id);
  }
}
