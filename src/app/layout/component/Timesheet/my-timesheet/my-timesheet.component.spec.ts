import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTimesheetComponent } from './my-timesheet.component';

describe('MyTimesheetComponent', () => {
  let component: MyTimesheetComponent;
  let fixture: ComponentFixture<MyTimesheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTimesheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
