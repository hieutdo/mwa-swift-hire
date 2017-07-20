import { Authorized, Body, Get, JsonController, Param, Post, QueryParam } from 'routing-controllers';
import { ICoordinate, Job } from '../models/job.model';
import * as mongoose from 'mongoose';

@JsonController('/jobs')
@Authorized()
export class JobController {

  @Get('/')
  async findAll() {
    const jobs = await Job.find({}).populate('createdBy').exec();
    return jobs.map(job => JSON.parse(JSON.stringify(job)));
  }

  @Get('/:jobId')
  async findById(@Param('jobId') jobId: string) {
    const job = await Job.findById(jobId)
      .populate('createdBy')
      .populate('assignee')
      .populate('waitingList')
      .exec();
    return JSON.parse(JSON.stringify(job));
  }

  @Post('/assignee')
  async updateAssignee(@Body() body: any) {
    await Job.findOneAndUpdate({ _id: mongoose.Types.ObjectId(body.jobId) }, {
      $set: {
        assignee: mongoose.Types.ObjectId(body.assigneeId)
      }
    });
    return this.findById(body.jobId);
  }

  @Post('/candidate')
  async addCandidate(@Body() body: any) {
    await Job.findOneAndUpdate({ _id: mongoose.Types.ObjectId(body.jobId) }, {
      $addToSet: {
        waitingList: mongoose.Types.ObjectId(body.candidateId)
      }
    });
    return this.findById(body.jobId);
  }

  @Get('/getNearestJobs')
  async findNearestJobs(@QueryParam("longitude") longitude: number, @QueryParam("latitude") latitude: number) {
    const location: ICoordinate = { longitude, latitude };
    const result = await Job.findNearestJobs(location, 10);
    console.log("get nearest job:.........  ",result.map(doc => JSON.parse(JSON.stringify(doc))));
    return result.map(doc => JSON.parse(JSON.stringify(doc)));
  }

  @Get('/getUserJobs')
  async findUserJobs(@QueryParam("id") id: string){
    return Job.find({assignee: mongoose.Types.ObjectId(id)});
  }

  @Post('/insertAJob')
  insertAJob(@Body() job: any) {
    let result = this.saveJob(job);
    console.log("result: ", result);
    return result;
  }

  async saveJob(job: any) {
    try {
      console.log("Job: ", job);
      let result = await Job.insertAJob(job);
      return await result.toJSON();
    } catch (error) {
      console.log("Error in catch:", error);
      return error;
    }
  }

  @Get('/getMyOffers')
  async getMyOffers(@QueryParam("userId") userId: string) {
    const result =await Job.getMyOffers(userId);
    console.log(result.map(doc => JSON.parse(JSON.stringify(doc))));
    return result.map(doc => JSON.parse(JSON.stringify(doc)));
  }


}
