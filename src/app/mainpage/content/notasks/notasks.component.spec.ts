import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasksComponent } from './notasks.component';

describe('NotasksComponent', () => {
  let component: NotasksComponent;
  let fixture: ComponentFixture<NotasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
