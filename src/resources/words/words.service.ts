import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Word } from './schemas/word.schema';
import { WordParamsDto } from './dto/get-words.dto';

@Injectable()
export class WordsService {
  constructor(@InjectModel(Word.name) private wordModel: Model<Word>) {}

  async getWords({ page, group }: WordParamsDto): Promise<Word[]> {
    return await this.wordModel.find({ page, group });
  }
}
