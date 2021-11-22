import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarinCodeComponent } from './carin-code.component';

describe('CarinCodeComponent', () => {
  let component: CarinCodeComponent;
  let fixture: ComponentFixture<CarinCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarinCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarinCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
