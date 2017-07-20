import { Authorized, Body, Get, JsonController, Post, QueryParam } from 'routing-controllers';
import { ICoordinate, Job } from '../models/job.model';

@JsonController('/jobs')
@Authorized()
export class JobController {

  @Get('/')
  findAll() {
    return Job.find({});
  }

  @Get('/getNearestJobs')
  async findNearestJobs(@QueryParam("longitude") longitude: number, @QueryParam("latitude") latitude: number) {
    const location: ICoordinate = { longitude, latitude };
    const result = await Job.findNearestJobs(location, 10);    
    return result.map(doc => JSON.parse(JSON.stringify(doc)));
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
    return result.map(doc => JSON.parse(JSON.stringify(doc)));
  }

  
}
