import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkLogManagementComponent } from './work-log-management.component';

describe('WorkLogManagementComponent', () => {
  let component: WorkLogManagementComponent;
  let fixture: ComponentFixture<WorkLogManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkLogManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkLogManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
