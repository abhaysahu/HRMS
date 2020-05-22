import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyServiceRequetsComponent } from './my-service-requets.component';

describe('MyServiceRequetsComponent', () => {
  let component: MyServiceRequetsComponent;
  let fixture: ComponentFixture<MyServiceRequetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyServiceRequetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyServiceRequetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
