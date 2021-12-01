import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsLetter4Component } from './news-letter4.component';

describe('NewsLetter4Component', () => {
  let component: NewsLetter4Component;
  let fixture: ComponentFixture<NewsLetter4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsLetter4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsLetter4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
