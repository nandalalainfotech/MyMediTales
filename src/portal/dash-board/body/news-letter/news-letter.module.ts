import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsLetterRoutingModule } from './news-letter-routing.module';
import { NewsLetterComponent } from './news-letter.component';
import { MatTabsModule } from '@angular/material/tabs';
import { NewsLetter1Component } from './news-letter1/news-letter1.component';
import { NewsLetter2Component } from './news-letter2/news-letter2.component';
import { NewsLetter3Component } from './news-letter3/news-letter3.component';
import { NewsLetter4Component } from './news-letter4/news-letter4.component';

@NgModule({
  declarations: [
    NewsLetterComponent,
    NewsLetter1Component,
    NewsLetter2Component,
    NewsLetter3Component,
    NewsLetter4Component
  ],
  imports: [
    CommonModule,
    NewsLetterRoutingModule,
    MatTabsModule
  ]
})
export class NewsLetterModule { }
