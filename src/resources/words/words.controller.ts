import { Controller, Get, Param, Query } from '@nestjs/common';
import { WordsService } from './words.service';
import { ObjectId } from 'mongoose';

@Controller('words')
export class WordsController {
  constructor(private wordsService: WordsService) {}

  @Get()
  getWords(@Query('page') page: number, @Query('group') group: number) {
    return this.wordsService.getWords({ page, group });
  }

  @Get(':id')
  getWordById(@Param('id') id: ObjectId) {
    return this.wordsService.getWordById(id);
  }
}
