import { Component, OnInit } from '@angular/core';
import { DBService } from '../../services/db.service';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  nearestJobs: any; 
  constructor(public dbService: DBService) { }

  ngOnInit() {  
    this.dbService.getNearestJobs(-91.9588018, 41.0127348)
      .subscribe(data => {
        this.nearestJobs = data;        
      });

  }

}
