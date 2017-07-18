import { Component, OnInit } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import {environment} from '../../../environments/environment';
@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  constructor(private authHttp: AuthHttp) { }

  ngOnInit() {
    this.authHttp.get(`${environment.api.baseUrl}/jobs/1`).map(res => res.json()).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

}
