import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayShiftsComponent } from './display-shifts.component';

describe('DisplayShiftsComponent', () => {
  let component: DisplayShiftsComponent;
  let fixture: ComponentFixture<DisplayShiftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayShiftsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayShiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
