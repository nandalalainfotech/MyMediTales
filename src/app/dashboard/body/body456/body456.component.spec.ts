import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Body456Component } from './body456.component';

describe('Body456Component', () => {
  let component: Body456Component;
  let fixture: ComponentFixture<Body456Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Body456Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Body456Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
