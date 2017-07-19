import { Component, OnInit } from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';
import {DBService} from './../DBService';

@Component({
  selector: 'app-postjob-page',
  templateUrl: './postjob-page.component.html',
  styleUrls: ['./postjob-page.component.scss']
})
export class PostjobPageComponent implements OnInit {
  categories: any[];
 
  constructor(private dbService: DBService) {
    this.categories = this.dbService.getCategory();
  }
  
  ngOnInit() {
        
  }
  onSubmit(postForm: NgForm){
    console.log(postForm.value);
  }
}
