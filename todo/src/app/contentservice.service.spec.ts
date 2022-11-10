import { TestBed } from '@angular/core/testing';

import { ContentserviceService } from './contentservice.service';

describe('ContentserviceService', () => {
  let service: ContentserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
