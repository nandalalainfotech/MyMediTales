import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsLetter1Component } from './news-letter1.component';

describe('NewsLetter1Component', () => {
  let component: NewsLetter1Component;
  let fixture: ComponentFixture<NewsLetter1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsLetter1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsLetter1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
