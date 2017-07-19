import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import {DBService} from '../DBService';
import 'rxjs/add/operator/toPromise';
import { AuthHttp } from 'angular2-jwt';
import {environment} from '../../../environments/environment';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,

  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  items= [];
  constructor(private authHttp: AuthHttp, public dbService: DBService) { }

  ngOnInit() {
     this.authHttp.get(`${environment.api.baseUrl}/jobs/1`).map(res => res.json()).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    // this.dbService.getNearestJobs().subscribe(data =>{this.items=data}); 
      
    this.items = this.dbService.getNearestJobs();
    console.log(this.items);
  }
  

}
