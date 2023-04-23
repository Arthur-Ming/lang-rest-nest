import { Module } from '@nestjs/common';
import { UserWordsController } from './userWords.controller';
import { UserWordsService } from './userWords.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserWords, UserWordsSchema } from './schemas/userWords.schema';
import { User, UserSchema } from '../users/schemas/user.schema';
import { Word, WordSchema } from '../words/schemas/word.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserWords.name, schema: UserWordsSchema },
      { name: User.name, schema: UserSchema },
      { name: Word.name, schema: WordSchema },
    ]),
  ],
  controllers: [UserWordsController],
  providers: [UserWordsService],
})
export class UserWordsModule {}
