import { TestBed } from '@angular/core/testing';

import { ToogleNavbarService } from './toogle-navbar.service';

describe('ToogleNavbarService', () => {
  let service: ToogleNavbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToogleNavbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
