import { Document, model, Model, Schema } from 'mongoose';
import { IRating, RatingSchema } from './rating.model';
import { IJob, JobSchema } from './job.model';

export interface IUser extends Document {
  name: string,
  picture: string,
  email: string,
  ratings: IRating[],
  jobs: IJob[],
  offers: IJob[],
}

export interface IUserModel extends Model<IUser> {

}

export const UserSchema = new Schema({
  name: String,
  picture: String,
  email: String,
  ratings: [RatingSchema],
  jobs: [JobSchema],
  offers: [JobSchema],
});

export const User = model<IUser>('User', UserSchema) as IUserModel;
