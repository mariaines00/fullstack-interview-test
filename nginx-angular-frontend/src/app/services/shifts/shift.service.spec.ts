import { TestBed } from '@angular/core/testing';

import { ShiftService } from './shift.service';

describe('ShiftServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShiftService = TestBed.get(ShiftService);
    expect(service).toBeTruthy();
  });
});
