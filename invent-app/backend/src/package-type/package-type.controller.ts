import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PackageTypeService } from './package-type.service';
import { CreatePackageTypeDto } from './dto/create-package-type.dto';
import { UpdatePackageTypeDto } from './dto/update-package-type.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enums/rol.enum';

@Controller('package-type')
export class PackageTypeController {
  constructor(private readonly packageTypeService: PackageTypeService) {}

  //@Auth(Role.SUPERADMIN)
  @Post()
  create(@Body() createPackageTypeDto: CreatePackageTypeDto) {
    return this.packageTypeService.create(createPackageTypeDto);
  }

  //@Auth(Role.USER)
  @Get()
  findAll() {
    return this.packageTypeService.findAll();
  }

  //@Auth(Role.USER)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.packageTypeService.findOne(+id);
  }

  //@Auth(Role.SUPERADMIN)
  @Patch(':id')
  update(@Param('id') id: number, @Body() updatePackageTypeDto: UpdatePackageTypeDto) {
    return this.packageTypeService.update(+id, updatePackageTypeDto);
  }

  //@Auth(Role.SUPERADMIN)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.packageTypeService.remove(+id);
  }
}
