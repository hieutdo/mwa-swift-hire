import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";

@Component({
  selector: 'app-candidate-jobs',
  templateUrl: './candidate-jobs.component.html',
  styleUrls: ['./candidate-jobs.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CandidateJobsComponent implements OnInit {
  myForm: FormGroup;
  jobs  = [];
  allJobs = [];
  sJobs = [];

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = true;
  sldvalue = 50;
  vertical = false;
  searchInputTerm = "";



  constructor(private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      'searchTitle': ['', [Validators.required]],
      'status' :formBuilder.group(
        {'coStatus':[],
                      'cuStatus':[]}
      ),
      'latitude': ['',[Validators.required]],
      'longitude': ['',[Validators.required]],

    });
  }

  searchJobs(event){
    if (typeof event === "string") {
        this.jobs.filter(job=>job.name.includes(event)).map(job=>this.sJobs.push(job));
        this.jobs = this.sJobs;
    }
    console.log(event)

  }

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(v) {
    this._tickInterval = Number(v);
  }
  private _tickInterval = 1;

  ngOnInit() {

    this.jobs=[{
      "name": "Full Stack Developer",
      "owner":{"name":"Tian",
        "id":"1",
        "grade":"4.5"},
      "desc": "You will help us build API for our compression infrastructure.",
      "category": "full-time",
      "createdAt": "20-01-2015",
      "modifiedAt": "20-01-2015",
      "city":"Farefiled",
      "state":"iowa",
      "location": [-73.840437, 40.6627235],
      "skills": ["Python", "Javascript", "Redis"],
      "feeRate": "20",
      "preferredDate":"20-01-2015",
      "preferredTime":"10:00",
      "status":"complete",
      "perks": ["free food", "gym membership"],
    },
      {
        "name": "Front End Developer",
        "owner":{"name":"MJ",
          "id":"1",
          "grade":"4.5"},
        "desc": "You will help us build API for our compression infrastructure.",
        "category": "full-time",
        "createdAt": "20-01-2015",
        "modifiedAt": "20-01-2015",
        "city":"Farefiled",
        "state":"iowa",
        "location": [-73.840437, 40.6627235],
        "skills": ["Python", "Javascript", "Redis"],
        "feeRate": "20",
        "preferredDate":"20-01-2015",
        "preferredTime":"10:00",
        "status":"complete",
        "perks": ["free food", "gym membership"],
      },

      {
        "name": "Backend Developer",
        "owner":{"name":"Assad",
          "id":"1",
          "grade":"4.5"},
        "desc": "You will help us build API for our compression infrastructure.",
        "category": "full-time",
        "createdAt": "20-01-2015",
        "modifiedAt": "20-01-2015",
        "city":"Farefiled",
        "state":"iowa",
        "location": [-73.840437, 40.6627235],
        "skills": ["Python", "Javascript", "Redis"],
        "feeRate": "20",
        "preferredDate":"20-01-2015",
        "preferredTime":"10:00",
        "status":"complete",
        "perks": ["free food", "gym membership"],
      },{
        "name": "Angular Developer",
        "owner":{"name":"Assad",
          "id":"1",
          "grade":"4.5"},
        "desc": "You will help us build API for our compression infrastructure.",
        "category": "full-time",
        "createdAt": "20-01-2015",
        "modifiedAt": "20-01-2015",
        "city":"Iowa City",
        "state":"iowa",
        "location": [-73.840437, 40.6627235],
        "skills": ["Python", "Javascript", "Redis"],
        "feeRate": "20",
        "preferredDate":"20-01-2015",
        "preferredTime":"10:00",
        "status":"complete",
        "perks": ["free food", "gym membership"],
      }];
    this.allJobs = this.jobs;
    console.log(this.myForm);
  }

  onSubmit(form) {
    console.log(form);
    console.log(this.sldvalue);
    console.log(this.sldvalue);


  }

}
