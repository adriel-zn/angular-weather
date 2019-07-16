import { TestBed } from '@angular/core/testing';

import { RandomNumberService } from './random-numbers.service';

describe('RandomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomNumberService = TestBed.get(RandomNumberService);
    expect(service).toBeTruthy();
  });
});
