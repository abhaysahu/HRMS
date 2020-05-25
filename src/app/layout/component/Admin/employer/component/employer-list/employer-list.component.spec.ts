import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerListComponent } from './employer-list.component';

describe('EmployerListComponent', () => {
  let component: EmployerListComponent;
  let fixture: ComponentFixture<EmployerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
