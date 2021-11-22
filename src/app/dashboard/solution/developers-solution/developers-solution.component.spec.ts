import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopersSolutionComponent } from './developers-solution.component';

describe('DevelopersSolutionComponent', () => {
  let component: DevelopersSolutionComponent;
  let fixture: ComponentFixture<DevelopersSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopersSolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopersSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
