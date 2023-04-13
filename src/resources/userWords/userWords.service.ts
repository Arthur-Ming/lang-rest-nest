import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserWords } from './schemas/userWords.schema';

@Injectable()
export class UserWordsService {
  constructor(@InjectModel(UserWords.name) private userWordsModel: Model<UserWords>) {}

  async getWords() {
    return 'dbfd';
  }
}
