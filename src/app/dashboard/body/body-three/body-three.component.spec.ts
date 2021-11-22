import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyThreeComponent } from './body-three.component';

describe('BodyThreeComponent', () => {
  let component: BodyThreeComponent;
  let fixture: ComponentFixture<BodyThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
