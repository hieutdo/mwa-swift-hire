import { Component, OnInit } from '@angular/core';
import {DBService} from '../DBService';
@Component({
  selector: 'app-myoffers-page',
  templateUrl: './myoffers-page.component.html',
  styleUrls: ['./myoffers-page.component.scss']
})
export class MyoffersPageComponent implements OnInit {

  items = [];
  userName: string;
  constructor(public dbService: DBService) { }

  ngOnInit() {
    this.items = this.dbService.getMyOffers(this.userName);
  }

  


}
