import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { Vendor } from './entities/vendor.entity';

@Injectable()
export class VendorService {

  constructor(@InjectRepository(Vendor) private vendorRepo: Repository<Vendor>) {}


  create(createVendorDto: CreateVendorDto): Promise<Vendor> {
    const vendor = this.vendorRepo.create(createVendorDto);
    return this.vendorRepo.save(vendor);
  }

  findAll(): Promise<Vendor[]> {
    return this.vendorRepo.find();
  }

  async findOne(id: number) {
    const vendor = await this.vendorRepo.findOneBy({id})
    return vendor;
  }

  async update(id: number, updateVendorDto: UpdateVendorDto) {
    const vendor = await this.vendorRepo.findOneBy({id});
    Object.assign(vendor, updateVendorDto);
    return this.vendorRepo.save(vendor);
  }

  async remove(id: number) {
    const vendor = await this.vendorRepo.findOneBy({id});
    return this.vendorRepo.delete(vendor);
  }
}
