import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetBankComponent } from './timesheet-bank.component';

describe('TimesheetBankComponent', () => {
  let component: TimesheetBankComponent;
  let fixture: ComponentFixture<TimesheetBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimesheetBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
