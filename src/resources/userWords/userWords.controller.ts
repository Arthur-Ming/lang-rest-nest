import { Controller, Get } from '@nestjs/common';
import { UserWordsService } from './userWords.service';

@Controller('/users/:userId/words')
export class UserWordsController {
  constructor(private userWordsService: UserWordsService) {}

  @Get()
  getWords() {
    return this.userWordsService.getWords();
  }
}
