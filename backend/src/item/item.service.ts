import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemService {

  constructor(@InjectRepository(Item) private readonly itemRepo: Repository<Item>) {}


  create(createItemDto: CreateItemDto) {
    const item = this.itemRepo.create(createItemDto);
    return this.itemRepo.save(item);
  }

  findAll(): Promise<Item[]> {
    return this.itemRepo.find({relations: ['category', 'category.organization']});
  }

  findOne(id: number) {
    const item = this.itemRepo.findOneBy({id});
    return item;
  }

  async update(id: number, updateItemDto: UpdateItemDto) {
    const item = await this.itemRepo.findOneBy({id});
    Object.assign(item, updateItemDto);
    return this.itemRepo.save(item);
  }

  async remove(id: number) {
    const item = await this.itemRepo.findOneBy({id});
    return this.itemRepo.delete(item);
  }
}
