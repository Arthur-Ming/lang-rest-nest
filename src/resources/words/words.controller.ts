import { Controller, Get, Query } from '@nestjs/common';
import { WordsService } from './words.service';

@Controller('words')
export class WordsController {
  constructor(private wordsService: WordsService) {}

  @Get()
  getWords(@Query('page') page: number, @Query('group') group: number) {
    return this.wordsService.getWords({ page, group });
  }
}
