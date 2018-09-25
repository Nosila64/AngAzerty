import { TestBed, inject } from '@angular/core/testing';

import { ApiAzertyService } from './api-azerty.service';

describe('ApiAzertyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiAzertyService]
    });
  });

  it('should be created', inject([ApiAzertyService], (service: ApiAzertyService) => {
    expect(service).toBeTruthy();
  }));
});
