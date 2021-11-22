import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPatientPartnersComponent } from './about-patient-partners.component';

describe('AboutPatientPartnersComponent', () => {
  let component: AboutPatientPartnersComponent;
  let fixture: ComponentFixture<AboutPatientPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPatientPartnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPatientPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
