import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSRComponent } from './add-sr.component';

describe('AddSRComponent', () => {
  let component: AddSRComponent;
  let fixture: ComponentFixture<AddSRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
