import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsoldProductsComponent } from './unsold-products.component';

describe('UnsoldProductsComponent', () => {
  let component: UnsoldProductsComponent;
  let fixture: ComponentFixture<UnsoldProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsoldProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsoldProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
