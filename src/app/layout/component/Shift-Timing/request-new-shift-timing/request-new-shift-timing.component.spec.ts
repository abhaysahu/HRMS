import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestNewShiftTimingComponent } from './request-new-shift-timing.component';

describe('RequestNewShiftTimingComponent', () => {
  let component: RequestNewShiftTimingComponent;
  let fixture: ComponentFixture<RequestNewShiftTimingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestNewShiftTimingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestNewShiftTimingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
