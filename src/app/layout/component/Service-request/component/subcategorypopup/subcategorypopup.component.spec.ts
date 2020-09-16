import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategorypopupComponent } from './subcategorypopup.component';

describe('SubcategorypopupComponent', () => {
  let component: SubcategorypopupComponent;
  let fixture: ComponentFixture<SubcategorypopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcategorypopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategorypopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
