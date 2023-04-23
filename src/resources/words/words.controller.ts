import { Controller, Get, Param, Query } from '@nestjs/common';
import { WordsService } from './words.service';
import { WordParamsDto } from './dto/get-words.dto';
import { GetWordByIdDto } from './dto/get-one.dto';

@Controller('words')
export class WordsController {
  constructor(private wordsService: WordsService) {}

  @Get()
  getWords(@Query() params: WordParamsDto) {
    return this.wordsService.getWords(params);
  }

  @Get(':wordId')
  getWordById(@Param() params: GetWordByIdDto) {
    return this.wordsService.getWordById(params);
  }
}
