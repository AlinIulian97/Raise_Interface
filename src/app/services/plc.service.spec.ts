import { TestBed } from '@angular/core/testing';

import { PlcService } from './plc.service';

describe('PlcService', () => {
  let service: PlcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
