import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Body7Component } from './body7.component';

describe('Body7Component', () => {
  let component: Body7Component;
  let fixture: ComponentFixture<Body7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Body7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Body7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
