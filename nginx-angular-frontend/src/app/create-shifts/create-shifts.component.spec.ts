import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateShiftsComponent } from './create-shifts.component';

describe('CreateShiftsComponent', () => {
  let component: CreateShiftsComponent;
  let fixture: ComponentFixture<CreateShiftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateShiftsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateShiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
