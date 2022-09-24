import { IsString } from 'class-validator';

import { Comment } from '../entities/comment.entity';

export class CreateCommentDto extends Comment {
  @IsString()
  user_id: string;

  @IsString()
  comment: string;
}