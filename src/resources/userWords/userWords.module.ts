import { Module } from '@nestjs/common';
import { UserWordsController } from './userWords.controller';
import { UserWordsService } from './userWords.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserWords, UserWordsSchema } from './schemas/userWords.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: UserWords.name, schema: UserWordsSchema }])],
  controllers: [UserWordsController],
  providers: [UserWordsService],
})
export class UserWordsModule {}
