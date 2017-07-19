import { Document, model, Model, Schema } from 'mongoose';
import { IUser } from './user.model';

export type JobStatus = 'open' | 'closed';

export interface ICoordinate {
  longitude: number;
  latitude: number;
}

export interface IJob extends Document {
  name: string;
  desc: string;
  category: string;
  street: string;
  city: string;
  state: string;
  location: ICoordinate;
  duration: number;
  feeRate: number;
  preferredDateTime: Date,
  status: JobStatus,
  waitingList: Array<IUser>,
  assignee?: IUser,
  createdBy: IUser,
  createdAt: Date,
  modifiedAt: Date,
}

export interface IJobModel extends Model<IJob> {
  findNearestJobs(location: ICoordinate, numOfJobs: number): Promise<Array<IJob>>;
  insertAJob(job: any): Promise<IJob>;
  getMyOffers(username: string): Promise<IJob>;
}

export const JobSchema = new Schema({
  name: String,
  desc: String,
  category: String,
  street: String,
  city: String,
  state: String,
  location: {
    longitude: Number,
    latitude: Number
  },
  duration: Number,
  feeRate: Number,
  preferredDate: Date,
  preferredTime: String,
  status: String,
  waitingList: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  assignee: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: Date,
  modifiedAt: Date,
});

JobSchema.static('findNearestJobs', (location: ICoordinate, numOfJobs: number = 10) => {
  return Job.find({
    location: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [location.longitude, location.latitude]
        },
        $maxDistance: 5000
      }
    }
  }).limit(numOfJobs);
});

JobSchema.static('insertAJob', (job: any) => {
  return Job.create(job);
});

JobSchema.static('getMyOffers', (username: string) => {
  return Job.find({ "createdBy.name": username });
});

export const Job = model<IJob>('Job', JobSchema) as IJobModel;
