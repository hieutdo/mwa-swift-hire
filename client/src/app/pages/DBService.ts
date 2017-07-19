import {Injectable} from '@angular/core';
import {Response, RequestOptions, Headers} from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import {environment} from '../../environments/environment';

@Injectable()
export class DBService {
categories:any[];


  constructor(private authHttp: AuthHttp) {
    this.categories =[ {value: 'Web Design', viewValue: 'Web Design'},
    {value: 'Software', viewValue: 'Software'},
    {value: 'Hardware', viewValue: 'Hardware'},
    {value: 'HomeService', viewValue: 'HomeService'},
    {value: 'MoveHouse', viewValue: 'MoveHouse'},
    {value: 'Healthcare', viewValue: 'Healthcare'}];
  }

  getNearestJobs(longitude: number, latitude: number){
    return this.authHttp.get(`${environment.api.baseUrl}/jobs/getNearestJobs?longitude=${longitude},latitude=${latitude}`)
    .map((res:Response)=>res.json);
  }

  getMyOffers(username: string){
    return this.authHttp.get(`${environment.api.baseUrl}/jobs/getMyOffers?username=${username}`)
    .map((res:Response) => res.json);
  }

  getCategory(){    
    return this.categories;
  }

  insertAJob(job: any){
    let bodyString = JSON.stringify(job); 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.authHttp.post(`${environment.api.baseUrl}/jobs/insertAJob`,bodyString, options)
                          .map((res:Response) => res.json()) ;
  }
// .catch((error:any) => Observable.throw(error.json().error || 'Server error')
  
}
