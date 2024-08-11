import { TestBed } from '@angular/core/testing';

import { VideoCategoryService } from './video-category.service';

describe('VideoCategoryService', () => {
  let service: VideoCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
