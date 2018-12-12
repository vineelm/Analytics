import { WorkLogManagementModule } from './work-log-management.module';

describe('WorkLogManagementModule', () => {
  let workLogManagementModule: WorkLogManagementModule;

  beforeEach(() => {
    workLogManagementModule = new WorkLogManagementModule();
  });

  it('should create an instance', () => {
    expect(workLogManagementModule).toBeTruthy();
  });
});
