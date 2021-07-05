import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupshiftComponent } from './popupshift.component';

describe('PopupshiftComponent', () => {
  let component: PopupshiftComponent;
  let fixture: ComponentFixture<PopupshiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupshiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupshiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
