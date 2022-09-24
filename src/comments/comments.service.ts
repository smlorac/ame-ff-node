import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';
import { IComment } from './comments.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel('Comment')
    private commentModel: Model<IComment>,
  ) {}

  private comments: Comment[] = [
    {
      id: 1,
      comment: 'Some comment',
      user_id: '1',
    },
  ];

  async create(createCommentDto: CreateCommentDto) {
    const newComment = new this.commentModel(createCommentDto);

    const savedComment = await newComment.save();

    return formatComment(savedComment);
  }

  async findAll() {
    const comments = await this.commentModel.find();

    return comments.map((comment: IComment) => formatComment(comment));
  }

  async findOne(id: string) {
    try {
      const comment = await this.commentModel.findById(id);

      if (!comment) {
        throw new NotFoundException(`Comentário ${id} não encontrado`);
      }

      return formatComment(comment);
    } catch (err) {
      throw new NotFoundException(`Comentário ${id} não encontrado`);
    }
  }

  async update(id: string, updateCommentDto: UpdateCommentDto) {
    await this.findOne(id);

    await this.commentModel.findOneAndUpdate({ _id: id }, updateCommentDto);

    const updatedComment = await this.findOne(id);

    return formatComment(updatedComment);
  }

  async remove(id: string) {
    await this.findOne(id);

    await this.commentModel.findByIdAndDelete(id);
  }
}

const formatComment = (comment: IComment) => ({
  id: comment.id,
  comment: comment.comment,
  user_id: comment.user_id,
});