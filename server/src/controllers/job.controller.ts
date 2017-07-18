import { Authorized, Get, JsonController } from 'routing-controllers';
import { Job } from '../models/job.model';

@JsonController('/jobs')
@Authorized()
export class JobController {

  @Get('/')
  findAll() {
    return Job.find({});
  }
}
