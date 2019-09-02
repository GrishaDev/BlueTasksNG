import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Taskbetter2Component } from './taskbetter2.component';

describe('Taskbetter2Component', () => {
  let component: Taskbetter2Component;
  let fixture: ComponentFixture<Taskbetter2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Taskbetter2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Taskbetter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
