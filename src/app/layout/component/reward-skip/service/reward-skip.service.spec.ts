import { TestBed } from '@angular/core/testing';

import { RewardSkipService } from './reward-skip.service';

describe('RewardSkipService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RewardSkipService = TestBed.get(RewardSkipService);
    expect(service).toBeTruthy();
  });
});
