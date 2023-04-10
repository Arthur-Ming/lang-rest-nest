import { Module } from '@nestjs/common';
import { WordsController } from './words.controller';
import { WordsService } from './words.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Word, WordSchema } from './schemas/word.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Word.name, schema: WordSchema }])],
  controllers: [WordsController],
  providers: [WordsService],
})
export class WordsModule {}
