import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidersSolutionComponent } from './providers-solution.component';

describe('ProvidersSolutionComponent', () => {
  let component: ProvidersSolutionComponent;
  let fixture: ComponentFixture<ProvidersSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvidersSolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvidersSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
