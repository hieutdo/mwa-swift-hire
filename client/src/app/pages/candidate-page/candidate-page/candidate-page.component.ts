import { Component, OnInit } from '@angular/core';
import {DBService} from "../../../services/db.service";


@Component({
  selector: 'app-candidate-page',
  templateUrl: './candidate-page.component.html',
  styleUrls: ['./candidate-page.component.scss']
})
export class CandidatePageComponent implements OnInit {
  jobs =[];
  constructor(service:DBService) {
     service.getAllJobs().subscribe(data =>{
       console.log("=======");
       this.jobs = data.json();
       console.log(this.jobs);
     });

    console.log(this.jobs);

  }

  ngOnInit() {
  }

}
