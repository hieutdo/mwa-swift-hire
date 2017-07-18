import { Authorized, Get, JsonController, Param } from 'routing-controllers';
import { Job } from '../models/job.model';

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

}
