import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyoffersPageComponent } from './myoffers-page.component';

describe('MyoffersPageComponent', () => {
  let component: MyoffersPageComponent;
  let fixture: ComponentFixture<MyoffersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyoffersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyoffersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
