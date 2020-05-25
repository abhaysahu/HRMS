import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerSaveComponent } from './employer-save.component';

describe('EmployerSaveComponent', () => {
  let component: EmployerSaveComponent;
  let fixture: ComponentFixture<EmployerSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
