import { TaskwiseModule } from './taskwise.module';

describe('TaskwiseModule', () => {
  let taskwiseModule: TaskwiseModule;

  beforeEach(() => {
    taskwiseModule = new TaskwiseModule();
  });

  it('should create an instance', () => {
    expect(taskwiseModule).toBeTruthy();
  });
});
