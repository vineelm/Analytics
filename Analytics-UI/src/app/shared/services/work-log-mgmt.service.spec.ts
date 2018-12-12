import { TestBed } from '@angular/core/testing';

import { WorkLogMgmtService } from './work-log-mgmt.service';

describe('WorkLogMgmtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkLogMgmtService = TestBed.get(WorkLogMgmtService);
    expect(service).toBeTruthy();
  });
});
