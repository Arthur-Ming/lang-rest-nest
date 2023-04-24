import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { LocalAuthGuard } from './strategies/local-auth.guard';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService, private usersService: UsersService) {}

  @UseGuards(AuthGuard)
  @Get('user')
  getUser(@Request() req) {
    return this.authService.getUser(req.user.id);
  }

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  signin(@Request() req) {
    return req.user;
  }

  @Post('signup')
  signup(@Body() signupDto: CreateUserDto) {
    return this.usersService.create(signupDto);
  }
}
