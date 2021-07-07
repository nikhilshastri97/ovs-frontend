import { TestBed } from '@angular/core/testing';

import { NominatedcandidateService } from './nominatedcandidate.service';

describe('NominatedcandiateService', () => {
  let service: NominatedcandidateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NominatedcandidateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
