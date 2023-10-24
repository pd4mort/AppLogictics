import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enums/rol.enum';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  //@Auth(Role.USER)
  @Post()
  create(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.create(createItemDto);
  }

  //@Auth(Role.USER)
  @Get()
  findAll() {
    return this.itemsService.findAll();
  }

  //@Auth(Role.USER)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.itemsService.findOne(+id);
  }

  //@Auth(Role.ADMIN)
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateItemDto: UpdateItemDto) {
    return this.itemsService.update(+id, updateItemDto);
  }

  //@Auth(Role.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.itemsService.remove(+id);
  }
}
