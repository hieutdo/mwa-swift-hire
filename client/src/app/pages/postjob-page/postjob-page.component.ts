import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DBService } from '../../services/db.service';

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

  onSubmit(postForm: NgForm) {
    console.log(postForm.value);
    this.dbService.insertAJob(postForm.value).subscribe(data => console.log(data));
  }

  onReset(postForm: NgForm){
    postForm.resetForm;
  }
}