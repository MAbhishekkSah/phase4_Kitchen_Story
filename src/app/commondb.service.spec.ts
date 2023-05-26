import { TestBed } from '@angular/core/testing';

import { CommondbService } from './commondb.service';

describe('CommondbService', () => {
  let service: CommondbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommondbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
