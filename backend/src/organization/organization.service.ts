import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { Organization } from './entities/organization.entity';

@Injectable()
export class OrganizationService {

  constructor(@InjectRepository(Organization) private organizationRepo: Repository<Organization>){}


  async create(createOrganizationDto: CreateOrganizationDto): Promise<Organization> {
    const org =  this.organizationRepo.create(createOrganizationDto);
    return await this.organizationRepo.save(org);
  }

  findAll() {
    return this.organizationRepo.find();
  }

  async findOne(id: number) {
    const org = await this.organizationRepo.findOne({where: {id}, relations: {user: true}});
    return org;
  }

  async update(id: number, updateOrganizationDto: UpdateOrganizationDto) {
    const org  = await this.organizationRepo.findOneBy({id});
    Object.assign(org, updateOrganizationDto);
    return this.organizationRepo.save(org);
  }

  async remove(id: number) {
    const org = await this.organizationRepo.findOneBy({id});
    return this.organizationRepo.delete(org);
  }
}
