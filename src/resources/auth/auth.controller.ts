import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';

@Controller()
export class AuthController {
  constructor(private authService: AuthService, private usersService: UsersService) {}

  @Post('/signup')
  signup(@Body() signupDto: CreateUserDto) {
    return this.usersService.create(signupDto);
  }
}
