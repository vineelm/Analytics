import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskwiseComponent } from './taskwise.component';

describe('TaskwiseComponent', () => {
  let component: TaskwiseComponent;
  let fixture: ComponentFixture<TaskwiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskwiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
