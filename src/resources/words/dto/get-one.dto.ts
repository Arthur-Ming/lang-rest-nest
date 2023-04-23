import { IsMongoId, IsNotEmpty } from 'class-validator';
import { ObjectId } from 'mongoose';

export class GetWordByIdDto {
  @IsNotEmpty()
  @IsMongoId()
  readonly wordId: ObjectId;
}
