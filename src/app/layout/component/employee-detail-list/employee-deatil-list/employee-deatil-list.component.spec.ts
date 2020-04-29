import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDeatilListComponent } from './employee-deatil-list.component';

describe('EmployeeDeatilListComponent', () => {
  let component: EmployeeDeatilListComponent;
  let fixture: ComponentFixture<EmployeeDeatilListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDeatilListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDeatilListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
