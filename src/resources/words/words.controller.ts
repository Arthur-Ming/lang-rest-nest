import { Controller, Get, Query, Req } from '@nestjs/common';
import { WordsService } from './words.service';
import { Request } from 'express';

@Controller('words')
export class WordsController {
  constructor(private wordsService: WordsService) {}

  @Get()
  getWords(@Query('page') page: number, @Query('group') group: number) {
    console.log(page);
    return this.wordsService.getWords(page, group);
  }
}
