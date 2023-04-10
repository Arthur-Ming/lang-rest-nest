import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Word } from './schemas/word.schema';

@Injectable()
export class WordsService {
  constructor(@InjectModel(Word.name) private wordModel: Model<Word>) {}

  async getWords(page = 0, group = 0): Promise<Word[]> {
    return await this.wordModel.find({ page, group });
  }
}
