import { TestBed } from '@angular/core/testing';

import { BeerNgQuillService } from './beer-ng-quill.service';

describe('BeerNgQuillService', () => {
  let service: BeerNgQuillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeerNgQuillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
