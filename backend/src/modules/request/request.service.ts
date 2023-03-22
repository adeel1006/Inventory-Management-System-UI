import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { Request } from './entities/request.entity';

@Injectable()
export class RequestService {

  constructor(@InjectRepository(Request) private readonly reqRepo : Repository<Request>){}


  create(createRequestDto: CreateRequestDto) {
    const request = this.reqRepo.create(createRequestDto);
    return this.reqRepo.save(request);
  }

  findAll(user : any) {
    return this.reqRepo.find({relations: ['user', 'user.organization'], where: {user: {organization: {id : user.orgId}}}});
  }

  findOne(id: number) {
    return this.reqRepo.findOneBy({id});
  }

  async update(id: number, updateRequestDto: UpdateRequestDto) {
    const request = await this.reqRepo.findOneBy({id});
    Object.assign(request, updateRequestDto)
    return this.reqRepo.save(request);
  }

  async remove(id: number) {
    const request = await this.reqRepo.findOneBy({id});
    return this.reqRepo.delete(request);
  }
}
