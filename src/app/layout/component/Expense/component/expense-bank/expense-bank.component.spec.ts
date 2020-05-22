import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseBankComponent } from './expense-bank.component';

describe('ExpenseBankComponent', () => {
  let component: ExpenseBankComponent;
  let fixture: ComponentFixture<ExpenseBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
