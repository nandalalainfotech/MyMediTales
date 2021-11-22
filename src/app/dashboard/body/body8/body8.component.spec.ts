import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Body8Component } from './body8.component';

describe('Body8Component', () => {
  let component: Body8Component;
  let fixture: ComponentFixture<Body8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Body8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Body8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
