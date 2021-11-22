import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayersSolutionComponent } from './payers-solution.component';

describe('PayersSolutionComponent', () => {
  let component: PayersSolutionComponent;
  let fixture: ComponentFixture<PayersSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayersSolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayersSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
