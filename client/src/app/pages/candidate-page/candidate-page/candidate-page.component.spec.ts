import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatePageComponent } from './candidate-page.component';

describe('CandidatePageComponent', () => {
  let component: CandidatePageComponent;
  let fixture: ComponentFixture<CandidatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
