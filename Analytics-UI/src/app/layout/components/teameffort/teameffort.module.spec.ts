import { TeameffortModule } from './teameffort.module';

describe('TeameffortModule', () => {
  let teameffortModule: TeameffortModule;

  beforeEach(() => {
    teameffortModule = new TeameffortModule();
  });

  it('should create an instance', () => {
    expect(teameffortModule).toBeTruthy();
  });
});
