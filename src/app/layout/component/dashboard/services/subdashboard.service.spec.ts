import { TestBed } from '@angular/core/testing';

import { SubdashboardService } from './subdashboard.service';

describe('SubdashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubdashboardService = TestBed.get(SubdashboardService);
    expect(service).toBeTruthy();
  });
});
