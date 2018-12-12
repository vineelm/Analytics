import { PlannedVsActualModule } from './planned-vs-actual.module';

describe('PlannedVsActualModule', () => {
  let plannedVsActualModule: PlannedVsActualModule;

  beforeEach(() => {
    plannedVsActualModule = new PlannedVsActualModule();
  });

  it('should create an instance', () => {
    expect(plannedVsActualModule).toBeTruthy();
  });
});
