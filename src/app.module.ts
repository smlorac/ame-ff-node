import { Module } from '@nestjs/common';
import { CommentsModule } from './comments/comments.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [CommentsModule, MongooseModule.forRoot('mongodb://localhost:27017')],
  controllers: [],
  providers: [],
})
export class AppModule {}
