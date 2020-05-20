import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpicklistComponent } from './editpicklist.component';

describe('EditpicklistComponent', () => {
  let component: EditpicklistComponent;
  let fixture: ComponentFixture<EditpicklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpicklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpicklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
