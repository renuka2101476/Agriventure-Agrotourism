import { TestBed } from '@angular/core/testing';

import { FeedbackreviewService } from './feedbackreview.service';

describe('FeedbackreviewService', () => {
  let service: FeedbackreviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedbackreviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
