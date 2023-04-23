import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserWords } from './schemas/userWords.schema';
import { User } from '../users/schemas/user.schema';
import { Word } from '../words/schemas/word.schema';
import { MutateUserWordsDto } from './dto/mutate-words.dto';
import { GetUserWordsDto } from './dto/get-words.dto';

@Injectable()
export class UserWordsService {
  constructor(
    @InjectModel(UserWords.name) private userWordsModel: Model<UserWords>,
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Word.name) private wordsModel: Model<Word>
  ) {}

  async get({ userId }: GetUserWordsDto) {
    const user = await this.userModel.findById(userId);

    if (!user) {
      throw new NotFoundException();
    }

    const userWords = await this.userWordsModel
      .findOneAndUpdate({ userId }, {}, { upsert: true, new: true })
      .populate({
        path: 'words',
      });

    return userWords;
  }

  async add({ userId, wordId }: MutateUserWordsDto) {
    const user = await this.userModel.findById(userId);
    const word = await this.wordsModel.findById(wordId);

    const userWords = await this.userWordsModel.findOneAndUpdate(
      { userId },
      { $addToSet: { words: word } },
      { upsert: true, new: true }
    );

    console.log('user');
    console.log(user);
    console.log(userWords);
    return userWords;
  }

  async remove({ userId, wordId }: MutateUserWordsDto) {
    const userWords = await this.userWordsModel.findOneAndUpdate(
      { userId },
      { $pull: { words: wordId } },
      { new: true }
    );

    console.log('user');

    console.log(userWords);
    return userWords;
  }
}
