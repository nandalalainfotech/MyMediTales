import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsLetter2Component } from './news-letter2.component';

describe('NewsLetter2Component', () => {
  let component: NewsLetter2Component;
  let fixture: ComponentFixture<NewsLetter2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsLetter2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsLetter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
