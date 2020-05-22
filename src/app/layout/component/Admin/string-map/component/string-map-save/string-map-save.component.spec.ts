import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringMapSaveComponent } from './string-map-save.component';

describe('StringMapSaveComponent', () => {
  let component: StringMapSaveComponent;
  let fixture: ComponentFixture<StringMapSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringMapSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringMapSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
