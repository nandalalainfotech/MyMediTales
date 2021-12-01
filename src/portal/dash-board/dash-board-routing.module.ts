import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { DashBoardComponent } from './dash-board.component';



const routes: Routes = [
  {
    path: "",
    component: DashBoardComponent,
    children: [
      {
        path: "",
        component: BodyComponent,
        
      },
      {
        path: 'app-news-letter',
        loadChildren: () => import("./body/news-letter/news-letter.module").then(m => m.NewsLetterModule),
       
      },
      {
        path: 'app-events',
        loadChildren: () => import("./body/events/events.module").then(m => m.EventsModule)
      },
      {
        path: 'app-blog',
        loadChildren: () => import("./body/blog/blog.module").then(m => m.BlogModule)
      },
      {
        path: 'app-survey',
        loadChildren: () => import("./body/survey/survey.module").then(m => m.SurveyModule)
      },
      {
        path: 'app-polls',
        loadChildren: () => import("./body/polls/polls.module").then(m => m.PollsModule)
      },
      {
        path: 'app-reports',
        loadChildren: () => import("./body/reports/reports.module").then(m => m.ReportsModule)
      },
      {
        path: 'app-setup',
        loadChildren: () => import("./body/setup/setup.module").then(m => m.SetupModule)
      },
      {
        path: 'app-dashboard',
        loadChildren: () => import("./body/dashboard/dashboard.module").then(m => m.DashboardModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBoardRoutingModule { }
