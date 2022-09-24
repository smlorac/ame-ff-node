import { triggerAsyncId } from 'async_hooks';
import * as moongose from 'mongoose';

export const CommentSchema = new moongose.Schema({
    user_id:{
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
});

export interface IComment {
    id: string,
    user_id: string,
    comment: string,
}