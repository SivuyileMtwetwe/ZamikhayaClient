import { TestBed } from '@angular/core/testing';

import { GetPropertyGeolocationService } from './get-property-geolocation.service';

describe('GetPropertyGeolocationService', () => {
  let service: GetPropertyGeolocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPropertyGeolocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
