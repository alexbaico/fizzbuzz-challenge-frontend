import { TestBed } from '@angular/core/testing';

import { FizzbuzzserviceService } from './fizzbuzzservice.service';

describe('FizzbuzzserviceService', () => {
  let service: FizzbuzzserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FizzbuzzserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
