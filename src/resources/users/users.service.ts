import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { genHashPassword } from 'src/utils/genHashPassword';
import { CreateUserDto } from './dto/create-user.dto';

const ENTITY_NAME = 'user';
const MONGO_ENTITY_EXISTS_ERROR_CODE = 11000;

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(signupDto: CreateUserDto): Promise<User> {
    const { password, email, name } = signupDto;
    try {
      const passwordHash = await genHashPassword(password);
      const user = await this.userModel.create({
        email,
        name,
        password: passwordHash,
      });

      return user;
    } catch (error) {
      if (error.code === MONGO_ENTITY_EXISTS_ERROR_CODE) {
        throw new HttpException(`${ENTITY_NAME} with this e-mail exists`, HttpStatus.CONFLICT);
      } else {
        throw error;
      }
    }
  }
}
