import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTimeAwayRequestsComponent } from './my-time-away-requests.component';

describe('MyTimeAwayRequestsComponent', () => {
  let component: MyTimeAwayRequestsComponent;
  let fixture: ComponentFixture<MyTimeAwayRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTimeAwayRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTimeAwayRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
