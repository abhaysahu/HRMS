import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemLogListComponent } from './system-log-list.component';

describe('SystemLogListComponent', () => {
  let component: SystemLogListComponent;
  let fixture: ComponentFixture<SystemLogListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemLogListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemLogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
