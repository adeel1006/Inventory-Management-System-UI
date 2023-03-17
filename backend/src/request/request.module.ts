import { Module } from '@nestjs/common';
import {Request} from './entities/request.entity'
import { RequestService } from './request.service';
import { RequestController } from './request.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Request])],
  controllers: [RequestController],
  providers: [RequestService]
})
export class RequestModule {}
