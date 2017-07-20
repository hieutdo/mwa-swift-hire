import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateJobsComponent } from './candidate-jobs.component';

describe('CandidateJobsComponent', () => {
  let component: CandidateJobsComponent;
  let fixture: ComponentFixture<CandidateJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
