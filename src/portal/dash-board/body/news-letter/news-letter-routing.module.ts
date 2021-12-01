import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsLetterComponent } from './news-letter.component';
import { NewsLetter1Component } from './news-letter1/news-letter1.component';
import { NewsLetter2Component } from './news-letter2/news-letter2.component';
import { NewsLetter3Component } from './news-letter3/news-letter3.component';
import { NewsLetter4Component } from './news-letter4/news-letter4.component';

const routes: Routes = [
  {
    path: '',
    component: NewsLetterComponent,
    children: [
      {
        path: "app-news-letter1",
        component: NewsLetter1Component
      },
      {
        path: "app-news-letter2",
        component: NewsLetter2Component
      },
      {
        path: "app-news-letter3",
        component: NewsLetter3Component
      },
      {
        path: "app-news-letter4",
        component: NewsLetter4Component
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsLetterRoutingModule { }
