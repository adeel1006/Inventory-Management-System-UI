import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
  
  constructor(@InjectRepository(Role) private roleRepo: Repository<Role>) {}

  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    const role = this.roleRepo.create(createRoleDto);
    return await this.roleRepo.save(role);
  }

  findAll() {
    return this.roleRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  findByName(role: string) {
    return this.roleRepo.findOne({ where: { role } });
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
