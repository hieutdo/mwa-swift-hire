import { Component, OnInit } from '@angular/core';
import { DBService } from '../../services/db.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-myoffers-page',
  templateUrl: './myoffers-page.component.html',
  styleUrls: ['./myoffers-page.component.scss']
})
export class MyoffersPageComponent implements OnInit {
  items: any;  

  constructor(public dbService: DBService, private auth: AuthService) { }

  ngOnInit() {
    this.dbService.getMyOffers(this.auth.userProfile._id)
    .subscribe(data=> this.items = data);
   
  }

}
