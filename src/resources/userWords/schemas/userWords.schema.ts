import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Word } from 'src/resources/words/schemas/word.schema';
import schemaOptions from 'src/utils/schemaOptions';

@Schema(schemaOptions())
export class UserWords {
  @Prop({ required: true, ref: 'Users' })
  userId: mongoose.Schema.Types.ObjectId;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Word' }])
  words: Word;
}

export const UserWordsSchema = SchemaFactory.createForClass(UserWords);
