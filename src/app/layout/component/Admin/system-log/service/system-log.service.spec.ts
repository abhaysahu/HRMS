import { TestBed } from '@angular/core/testing';

import { SystemLogService } from './system-log.service';

describe('SystemLogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SystemLogService = TestBed.get(SystemLogService);
    expect(service).toBeTruthy();
  });
});
