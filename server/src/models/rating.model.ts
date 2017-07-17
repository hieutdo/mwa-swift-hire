import { Document, Model, model, Schema } from 'mongoose';
import { IJob } from './job.model';

export type RatingType = 'candidate' | 'employer';

export interface IRating extends Document {
  comment: string,
  rating: number,
  type: RatingType,
  job: IJob,
}

export interface IRatingModel extends Model<IRating> {

}

export const RatingSchema = new Schema({
  comment: String,
  rating: Number,
  type: String,
  job: {
    type: Schema.Types.ObjectId,
    ref: 'Job'
  }
});

export const Rating = model<IRating>('Rating', RatingSchema);
