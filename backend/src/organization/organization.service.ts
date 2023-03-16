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

  findOne(id: number) {
    return `This action returns a #${id} organization`;
  }

  update(id: number, updateOrganizationDto: UpdateOrganizationDto) {
    return `This action updates a #${id} organization`;
  }

  remove(id: number) {
    return `This action removes a #${id} organization`;
  }
}
