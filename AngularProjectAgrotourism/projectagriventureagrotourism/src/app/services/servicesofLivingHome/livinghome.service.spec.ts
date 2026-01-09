import { TestBed } from '@angular/core/testing';

import { LivinghomeService } from './livinghome.service';

describe('LivinghomeService', () => {
  let service: LivinghomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivinghomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
