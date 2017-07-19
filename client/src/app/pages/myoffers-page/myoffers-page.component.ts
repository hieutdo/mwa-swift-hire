import { Component, OnInit } from '@angular/core';
import { DBService } from '../../services/db.service';
@Component({
  selector: 'app-myoffers-page',
  templateUrl: './myoffers-page.component.html',
  styleUrls: ['./myoffers-page.component.scss']
})
export class MyoffersPageComponent implements OnInit {
  items: any;
  userName: string;

  constructor(public dbService: DBService) { }

  ngOnInit() {
    this.dbService.getMyOffers(this.userName).subscribe(data => this.items = data);
  }

}
