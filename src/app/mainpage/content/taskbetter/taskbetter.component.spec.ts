import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskbetterComponent } from './taskbetter.component';

describe('TaskbetterComponent', () => {
  let component: TaskbetterComponent;
  let fixture: ComponentFixture<TaskbetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskbetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskbetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
