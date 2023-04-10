import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WordsModule } from './resources/words/words.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Arthur:6kpsDX2Tw3UGHnG@cluster0.x5m5nwl.mongodb.net/en-lang?retryWrites=true&w=majority'
    ),
    WordsModule,
  ],
})
export class AppModule {}
