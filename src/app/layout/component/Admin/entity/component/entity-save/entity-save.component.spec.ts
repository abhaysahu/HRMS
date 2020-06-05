import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitySaveComponent } from './entity-save.component';

describe('EntitySaveComponent', () => {
  let component: EntitySaveComponent;
  let fixture: ComponentFixture<EntitySaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntitySaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitySaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
