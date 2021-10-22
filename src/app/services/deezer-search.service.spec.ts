import { TestBed } from '@angular/core/testing';

import { DeezerSearchService } from './deezer-search.service';

describe('DeezerSearchService', () => {
  let service: DeezerSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeezerSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
