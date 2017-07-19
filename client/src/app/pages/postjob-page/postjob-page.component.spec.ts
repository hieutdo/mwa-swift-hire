import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostjobPageComponent } from './postjob-page.component';

describe('PostjobPageComponent', () => {
  let component: PostjobPageComponent;
  let fixture: ComponentFixture<PostjobPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostjobPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostjobPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
