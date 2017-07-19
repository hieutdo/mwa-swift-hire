import { Component, OnInit } from '@angular/core';
import {NgForm, NgModel, FormBuilder,  Validators} from '@angular/forms';
import {DBService} from './../DBService';
// import {FORM_DIRECTIVES, Control, ControlGroup} from '@angular/common';

@Component({
  selector: 'app-postjob-page',
  templateUrl: './postjob-page.component.html',
  styleUrls: ['./postjob-page.component.scss']
})
export class PostjobPageComponent implements OnInit {
  categories: any[];
 
  // postForm : Contr
  constructor(private dbService: DBService) {
    this.categories = this.dbService.getCategory();
  }
  
  ngOnInit() {
        
  }
  onSubmit(postForm: NgForm){
    console.log(postForm.value);
    this.dbService.insertAJob(postForm.value).subscribe(data => console.log(data));
  }
}
