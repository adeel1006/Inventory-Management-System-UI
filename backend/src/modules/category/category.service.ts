import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {

  constructor(@InjectRepository(Category) private readonly categoryRepo: Repository<Category>){}


  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {

    const parent = this.categoryRepo.create(createCategoryDto);
     await this.categoryRepo.save(parent);

     for(let i = 0; i < createCategoryDto.subcategory?.length; i++){
      const child = this.categoryRepo.create({name: createCategoryDto.subcategory[i].name, parent})
      await this.categoryRepo.save(child)
     }
    return parent; 
  }

  findAll(user : any): Promise<Category[]> {
    return this.categoryRepo.find({relations: {organization: true}, where: {organization: {id: user.orgId}}});
  }

  findOne(id: number) {
    return this.categoryRepo.findOneBy({id});
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<any> {

    const category = await this.categoryRepo.findOneBy({id});
    Object.assign(category, updateCategoryDto)
    return this.categoryRepo.save(category);
   
  }

  async remove(id: number): Promise<any> {
    const category = await this.categoryRepo.findOneBy({id});
    return this.categoryRepo.delete(category);
  }
}
