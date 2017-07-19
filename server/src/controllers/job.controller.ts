import { Authorized, Get, JsonController, Param, QueryParam, Post, Body } from 'routing-controllers';
import { Job, ICoordinate } from '../models/job.model';

@JsonController('/jobs')
@Authorized()
export class JobController {

  @Get('/')
  findAll() {
    return Job.find({});
  }

  @Get('/:id')
  findById(@Param('id') id: number) {
    console.log(id);
    return id;
  }

  @Get('/getNearestJobs')
  findNearestJobs(@QueryParam("longitude") longitude: number, @QueryParam("latitude") latitude: number) {
    let result = this.getNearestJobs(longitude, latitude);
    console.log("result: ",result);
    return result;
  }

  async getNearestJobs(longitude: number, latitude: number){
    try {
      let location : ICoordinate= {longitude, latitude};
      let result = await Job.findNearestJobs(location,10);
      return await result.toJSON();
    } catch (error) {
        console.log("Error in catch:", error);
        return error;
    }
  }

  @Post('/insertAJob')
  insertAJob(@Body() job:any){ 
    let result =  this.saveJob(job);
    console.log("result: ",result);
    return result;
  }

  async saveJob(job:any){
    try {
       console.log("Job: ",job);
       let result = await Job.insertAJob(job);
       return await result.toJSON();       
    } catch (error) {
      console.log("Error in catch:", error);
        return error;
    }
  }
  @Get('/getMyOffers')
  getMyOffers(@QueryParam("username") username: string){
    return Job.getMyOffers(username);
  }

}
