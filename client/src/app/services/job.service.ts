import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { environment } from '../../environments/environment';

@Injectable()
export class JobService {

  constructor(private authHttp: AuthHttp) { }

  public updateAssignee(jobId: string, assigneeId: string) {
    return this.authHttp.post(`${environment.api.baseUrl}/jobs/assignee`, {
      jobId, assigneeId
    }).map(res => res.json());
  }

  public addCandidate(jobId: string, candidateId: string) {
    return this.authHttp.post(`${environment.api.baseUrl}/jobs/candidate`, {
      jobId, candidateId
    }).map(res => res.json());
  }
}
