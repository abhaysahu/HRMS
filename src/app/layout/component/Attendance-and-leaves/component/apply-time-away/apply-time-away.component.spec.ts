import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyTimeAwayComponent } from './apply-time-away.component';

describe('ApplyTimeAwayComponent', () => {
  let component: ApplyTimeAwayComponent;
  let fixture: ComponentFixture<ApplyTimeAwayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyTimeAwayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyTimeAwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
