import { TestBed } from '@angular/core/testing';

import { ReimpresionesFBService } from './reimpresiones-fb.service';

describe('ReimpresionesFBService', () => {
  let service: ReimpresionesFBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReimpresionesFBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
