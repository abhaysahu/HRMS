import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderSaveComponent } from './vender-save.component';

describe('VenderSaveComponent', () => {
  let component: VenderSaveComponent;
  let fixture: ComponentFixture<VenderSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenderSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenderSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
