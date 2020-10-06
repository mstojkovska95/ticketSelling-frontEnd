import { TestBed } from '@angular/core/testing';

import { ConcertDetailsGuard } from './concert-details.guard';

describe('ConcertDetailsGuard', () => {
  let guard: ConcertDetailsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ConcertDetailsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
