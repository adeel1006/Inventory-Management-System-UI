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

  findAll() {
    return this.complainRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} complaint`;
  }

  update(id: number, updateComplaintDto: UpdateComplaintDto) {
    return `This action updates a #${id} complaint`;
  }

  remove(id: number) {
    return `This action removes a #${id} complaint`;
  }
}
