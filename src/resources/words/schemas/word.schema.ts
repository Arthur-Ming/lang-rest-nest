import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Word>;

@Schema()
export class Word {
  @Prop()
  group: number;

  @Prop()
  page: number;

  @Prop()
  word: number;

  @Prop()
  image: string;

  @Prop()
  audio: string;

  @Prop()
  audioMeaning: string;

  @Prop()
  audioExample: string;

  @Prop()
  textMeaning: string;

  @Prop()
  textExample: string;

  @Prop()
  transcription: string;

  @Prop()
  wordTranslate: string;

  @Prop()
  textMeaningTranslate: string;

  @Prop()
  textExampleTranslate: string;
}

export const WordSchema = SchemaFactory.createForClass(Word);
