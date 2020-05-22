import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringMapListComponent } from './string-map-list.component';

describe('StringMapListComponent', () => {
  let component: StringMapListComponent;
  let fixture: ComponentFixture<StringMapListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringMapListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringMapListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
