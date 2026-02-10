import { TestBed } from '@angular/core/testing';

import { MotorSettingService } from './motor-setting.service';

describe('MotorSettingService', () => {
  let service: MotorSettingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotorSettingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
