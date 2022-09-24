import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { Comment } from '../entities/comment.entity';

export class CreateCommentDto extends Comment {
  @ApiProperty({
    description: 'ID de um usuario existente',
    example: '12345',
  })
  @IsString()
  card_id: string;

  @ApiProperty({
    description: 'Comentário',
    example: 'Algum comentário',
  })
  @IsString()
  comment: string; 
}