import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LenderComponent } from './lender.component';

describe('LenderComponent', () => {
  let component: LenderComponent;
  let fixture: ComponentFixture<LenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
