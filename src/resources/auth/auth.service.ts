import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../users/schemas/user.schema';
import { Model } from 'mongoose';
import { SigninUserDto } from './dto/signin-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService
  ) {}

  /* async signin(signinDto: SigninUserDto): Promise<void> {} */

  async validateUser(email: string, password: string): Promise<any> {
    console.log('!!!!');

    console.log(password);
    console.log(email);
    const user = await this.userModel.findOne({ email });

    if (!user) {
      return null;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);

    const payload = { name: user.name, id: user.id };

    const access_token = await this.jwtService.signAsync(payload);

    console.log(access_token);

    return user;
  }
}
