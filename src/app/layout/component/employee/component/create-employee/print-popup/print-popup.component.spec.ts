import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintPopupComponent } from './print-popup.component';

describe('PrintPopupComponent', () => {
  let component: PrintPopupComponent;
  let fixture: ComponentFixture<PrintPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
