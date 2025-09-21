import { TestBed } from '@angular/core/testing';

import { TravelDestinationObject } from './travel-destination-object';

describe('TravelDestinationObject', () => {
  let service: TravelDestinationObject;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelDestinationObject);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
