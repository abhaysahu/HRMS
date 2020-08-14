import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubdashboardComponent } from './subdashboard.component';

describe('SubdashboardComponent', () => {
  let component: SubdashboardComponent;
  let fixture: ComponentFixture<SubdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
