import { TestBed } from '@angular/core/testing';

import { RandomNumberService } from './random-numbers.service';

describe('RandomNumberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomNumberService = TestBed.get(RandomNumberService);
    expect(service).toBeTruthy();
  });
  
  it('should generate correct number between the range', () => {
    const service: RandomNumberService = TestBed.get(RandomNumberService);

    const number = service.generate(1, 5);

    expect(number >= 1 && number <= 5).toBeTruthy();
  });
  
});
