import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannedVsActualComponent } from './planned-vs-actual.component';

describe('PlannedVsActualComponent', () => {
  let component: PlannedVsActualComponent;
  let fixture: ComponentFixture<PlannedVsActualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlannedVsActualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannedVsActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
