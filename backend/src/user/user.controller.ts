import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards , Request} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService){}

  

  @Post('/login')
  login(@Body() user: User): Promise<any> {
    return this.userService.login(user);
  }

  @Get()
  getUser(): any {
    return this.userService.findAll();
  }

  @Post('/new')
  // @UseGuards(AuthGuard('jwt'))
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('single/:id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }

  @Post('/otp')
  sendOtp(@Body() body: any): Promise<any>{
    return this.userService.sendOTP(body.email);
  }

  @Post('/reset')
  resetPassword(@Body() body: any){
    return this.userService.resetPassword(body.otp, body.email, body.password);
  }
}
