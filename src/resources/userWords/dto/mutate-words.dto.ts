import { IsMongoId, IsNotEmpty } from 'class-validator';
import { ObjectId } from 'mongoose';

export class MutateUserWordsDto {
  @IsNotEmpty()
  @IsMongoId()
  readonly wordId: ObjectId;

  @IsNotEmpty()
  @IsMongoId()
  readonly userId: ObjectId;
}
