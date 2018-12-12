import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeameffortComponent } from './teameffort.component';

describe('TeameffortComponent', () => {
  let component: TeameffortComponent;
  let fixture: ComponentFixture<TeameffortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeameffortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeameffortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
