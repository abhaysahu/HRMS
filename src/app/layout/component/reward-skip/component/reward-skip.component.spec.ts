import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardSkipComponent } from './reward-skip.component';

describe('RewardSkipComponent', () => {
  let component: RewardSkipComponent;
  let fixture: ComponentFixture<RewardSkipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RewardSkipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardSkipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
