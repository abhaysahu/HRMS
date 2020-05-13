import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringMapComponent } from './string-map.component';

describe('StringMapComponent', () => {
  let component: StringMapComponent;
  let fixture: ComponentFixture<StringMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
