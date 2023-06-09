import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { otp } from 'src/utils/generateOtp';
import { ProfileDto } from './dto/create-profile.dto';
import { notifyByEmail } from 'src/utils/emailNotification';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
    private jwtService: JwtService,
  ) {}

  // create a new user
  async create(createUserDto: CreateUserDto): Promise<User> {
    const salt = await bcrypt.genSalt();

    const user = this.userRepo.create({
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, salt),
    });
    return this.userRepo.save(user);
  }

  // Login User
  async login(user: User): Promise<any> {
    const { email, password } = user;
    const userExists = await this.userRepo.findOne({
      where: { email },
      relations: { role: true, organization: true },
    });

    if (userExists && (await bcrypt.compare(password, userExists.password))) {
      const token = this.generateToken(userExists.id, userExists.role.role, userExists?.organization?.id);
      return { user: userExists, token };
    } else {
      return 'Password did not match';
    }
  }

  // User Profile
  async editProfile(id: number, profileDto: ProfileDto){
    const user = await this.userRepo.findOneBy({id});
    Object.assign(user, profileDto);
    return this.userRepo.save(user);
  }

  // get all the created users
  findAll(): Promise<User[]> {
    return this.userRepo.find();
  }

  // get user by ID
  findOne(id: number): Promise<User> {
    return this.userRepo.findOneBy({ id });
  }

  // update user
  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepo.findOneBy({ id });
    Object.assign(user, updateUserDto);
    return this.userRepo.save(user);
  }

  // Delete user
  remove(id: string) {
    return this.userRepo.delete(id);
  }

  generateToken(id: number, role: string, orgId: number) {
    const payload = { id, role, orgId };
    return this.jwtService.sign(payload);
  }

  //  Sending otp on user's mail
  async sendOTP(email: string) {
    const user = await this.userRepo.findOneBy({ email });
    user.otp = otp();
    await this.userRepo.save(user);

    const message = 'Your OTP for password reset is: ' + otp();
    const subj = 'OTP for password reset';
    return notifyByEmail(email,subj, message);
  }

  // Reset Password
  async resetPassword(otp: number, email: string, password: string) {
    const user = await this.userRepo.findOneBy({ email });
    const salt = await bcrypt.genSalt();

    if (otp === user.otp) {
      user.password = await bcrypt.hash(password, salt);
      user.otp = null;
      await this.userRepo.save(user);

      return 'Password changed successfully';
    } else {
      return 'OTP did not match';
    }
  }
}
