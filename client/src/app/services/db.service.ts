import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { environment } from '../../environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DBService {
  categories: any[];

  constructor(private authHttp: AuthHttp, private auth: AuthService) {
    this.categories = [
      { value: 'Web Design', viewValue: 'Web Design' },
      { value: 'Software', viewValue: 'Software' },
      { value: 'Hardware', viewValue: 'Hardware' },
      { value: 'HomeService', viewValue: 'Home Service' },
      { value: 'MoveHouse', viewValue: 'Move House' },
      { value: 'Healthcare', viewValue: 'Healthcare' }];
  }

  getNearestJobs(longitude: number, latitude: number) {
    return this.authHttp.get(`${environment.api.baseUrl}/jobs/getNearestJobs?longitude=${longitude}&latitude=${latitude}`);
  }

  getMyOffers(username: string) {
    return this.authHttp.get(`${environment.api.baseUrl}/jobs/getMyOffers?username=${username}`)
      .map((res: Response) => res.json());
  }

  getCategory() {
    return this.categories;
  }

  insertAJob(job: any) {
    job.createdBy = this.auth.userProfile._id;
    const bodyString = JSON.stringify(job);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.authHttp.post(`${environment.api.baseUrl}/jobs/insertAJob`, bodyString, options)
      .map((res: Response) => res.json());
  }

}
