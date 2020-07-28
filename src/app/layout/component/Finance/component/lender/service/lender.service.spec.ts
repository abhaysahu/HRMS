import { TestBed } from '@angular/core/testing';

import { LenderService } from './lender.service';

describe('LenderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LenderService = TestBed.get(LenderService);
    expect(service).toBeTruthy();
  });
});
