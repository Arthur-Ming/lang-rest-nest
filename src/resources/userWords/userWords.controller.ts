import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserWordsService } from './userWords.service';
import { MutateUserWordsDto } from './dto/mutate-words.dto';
import { GetUserWordsDto } from './dto/get-words.dto';

@Controller('/users/:userId/words')
export class UserWordsController {
  constructor(private userWordsService: UserWordsService) {}

  @Get()
  getUserWords(@Param() params: GetUserWordsDto) {
    return this.userWordsService.get(params);
  }

  @Post(':wordId')
  addUserWord(@Param() params: MutateUserWordsDto) {
    return this.userWordsService.add(params);
  }

  @Delete(':wordId')
  removeUserWord(@Param() params: MutateUserWordsDto) {
    return this.userWordsService.remove(params);
  }
}
