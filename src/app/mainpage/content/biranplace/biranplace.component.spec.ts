import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiranplaceComponent } from './biranplace.component';

describe('BiranplaceComponent', () => {
  let component: BiranplaceComponent;
  let fixture: ComponentFixture<BiranplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiranplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiranplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
