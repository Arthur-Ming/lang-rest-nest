import { IsMongoId, IsNotEmpty } from 'class-validator';
import { ObjectId } from 'mongoose';

export class GetUserWordsDto {
  @IsNotEmpty()
  @IsMongoId()
  readonly userId: ObjectId;
}
