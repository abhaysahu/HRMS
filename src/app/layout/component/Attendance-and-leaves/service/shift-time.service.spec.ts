import { TestBed } from '@angular/core/testing';

import { ShiftTimeService } from './shift-time.service';

describe('ShiftTimeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShiftTimeService = TestBed.get(ShiftTimeService);
    expect(service).toBeTruthy();
  });
});
