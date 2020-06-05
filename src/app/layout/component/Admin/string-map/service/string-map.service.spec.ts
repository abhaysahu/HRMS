import { TestBed } from '@angular/core/testing';

import { StringMapService } from './string-map.service';

describe('StringMapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StringMapService = TestBed.get(StringMapService);
    expect(service).toBeTruthy();
  });
});
