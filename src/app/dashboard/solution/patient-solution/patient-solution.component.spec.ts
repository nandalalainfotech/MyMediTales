import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientSolutionComponent } from './patient-solution.component';

describe('PatientSolutionComponent', () => {
  let component: PatientSolutionComponent;
  let fixture: ComponentFixture<PatientSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientSolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
