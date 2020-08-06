import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwaitingMyApprovalComponent } from './awaiting-my-approval.component';

describe('AwaitingMyApprovalComponent', () => {
  let component: AwaitingMyApprovalComponent;
  let fixture: ComponentFixture<AwaitingMyApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwaitingMyApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwaitingMyApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
