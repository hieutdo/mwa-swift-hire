import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DBService } from '../../services/db.service';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/toPromise';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  public items: any;

  constructor(public dbService: DBService) { }

  ngOnInit() {
    this.items = this.dbService.getNearestJobs(-91.9588018, 41.0127348);    
  }

}
