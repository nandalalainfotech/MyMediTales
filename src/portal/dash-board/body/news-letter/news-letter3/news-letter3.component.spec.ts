import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsLetter3Component } from './news-letter3.component';

describe('NewsLetter3Component', () => {
  let component: NewsLetter3Component;
  let fixture: ComponentFixture<NewsLetter3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsLetter3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsLetter3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
