import { TestBed } from '@angular/core/testing';

import { TourpackageService } from './tourpackage.service';

describe('TourpackageService', () => {
  let service: TourpackageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TourpackageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
