import { FilterMenuModule } from './filter-menu.module';

describe('FilterMenuModule', () => {
  let filterMenuModule: FilterMenuModule;

  beforeEach(() => {
    filterMenuModule = new FilterMenuModule();
  });

  it('should create an instance', () => {
    expect(filterMenuModule).toBeTruthy();
  });
});
