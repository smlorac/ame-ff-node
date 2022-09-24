import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateCommentDto } from './create-comment.dto';
import { ApiProperty } from '@nestjs/swagger';


export class UpdateCommentDto extends PartialType(CreateCommentDto) {
  @ApiProperty({
    description: 'Comentário',
    example: 'Algum comentário',
  })
  @IsString()
  comment: string;
}