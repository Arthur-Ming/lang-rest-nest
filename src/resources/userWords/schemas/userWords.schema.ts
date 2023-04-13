import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Word } from 'src/resources/words/schemas/word.schema';

@Schema({
  versionKey: false,
  id: true,
  toJSON: {
    transform(doc, ret) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.passwordHash;
      delete ret.salt;
    },
  },
})
export class UserWords {
  @Prop({ required: true, ref: 'Users' })
  userId: mongoose.Schema.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Word' })
  words: Word;
}

export const UserWordsSchema = SchemaFactory.createForClass(UserWords);
