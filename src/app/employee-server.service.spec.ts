import { TestBed } from '@angular/core/testing';

import { EmployeeServerService } from './employee-server.service';

describe('EmployeeServerService', () => {
  let service: EmployeeServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
