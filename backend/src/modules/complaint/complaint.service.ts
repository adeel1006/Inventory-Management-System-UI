import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateComplaintDto } from './dto/create-complaint.dto';
import { UpdateComplaintDto } from './dto/update-complaint.dto';
import { Complaint } from './entities/complaint.entity';

@Injectable()
export class ComplaintService {


  constructor(@InjectRepository(Complaint) private readonly complainRepo : Repository<Complaint>){}


  create(createComplaintDto: CreateComplaintDto) {
    const complain = this.complainRepo.create(createComplaintDto);
    return this.complainRepo.save(complain);
  }

  findAll(user: any) {
    return this.complainRepo.find({relations: ['user', 'user.organization'] , where:{user:{organization:{id: user.orgId}}}});
  }

  findOne(id: number) {
    return this.complainRepo.findOneBy({id});
  }

  async update(id: number, updateComplaintDto: UpdateComplaintDto) {
    const complain = await this.complainRepo.findOneBy({id});
    Object.assign(complain, updateComplaintDto)
    return this.complainRepo.save(complain);
  }

  async remove(id: number) {
    const complain = await this.complainRepo.findOneBy({id});
    return this.complainRepo.delete(complain);
  }
}
