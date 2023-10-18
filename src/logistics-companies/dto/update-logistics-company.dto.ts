import { PartialType } from '@nestjs/mapped-types';
import { CreateLogisticsCompanyDto } from './create-logistics-company.dto';

export class UpdateLogisticsCompanyDto extends PartialType(CreateLogisticsCompanyDto) {}
