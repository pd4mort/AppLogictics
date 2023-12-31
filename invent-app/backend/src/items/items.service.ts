import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private itemRepository: Repository<Item>,
  ) {}

  async create(createItemDto: CreateItemDto) {
    return await this.itemRepository.save(createItemDto);
  }

  async findAll() {
    return await this.itemRepository.find();
  }

  async findOne(id: number) {
    return await this.itemRepository.findOneBy({ id });
  }

  async update(id: number, updateItemDto: UpdateItemDto) {
    const updateResult = await this.itemRepository.update(id, updateItemDto);
  
    if (updateResult.affected > 0) {
      const updatedItem = await this.itemRepository.findOneBy({ id });
      return updatedItem;
    } 
  }
  

  async remove(id: number) {
    return await this.itemRepository.softDelete({ id });
  }
}
