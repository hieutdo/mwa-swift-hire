import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateResumeComponent } from './candidate-resume.component';

describe('CandidateResumeComponent', () => {
  let component: CandidateResumeComponent;
  let fixture: ComponentFixture<CandidateResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
