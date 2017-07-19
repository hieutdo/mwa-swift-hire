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

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(v) {
    this._tickInterval = Number(v);
  }
  private _tickInterval = 1;

  ngOnInit() {
    console.log(this.myForm);
  }

  onSubmit(form) {
    console.log(form);
    console.log(this.sldvalue);
    console.log(this.sldvalue);


  }

}
