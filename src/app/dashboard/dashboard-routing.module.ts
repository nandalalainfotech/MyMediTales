import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { DashboardComponent } from './dashboard.component';


const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: "",
        component: BodyComponent
      },
      {
        path: 'app-solution',
        loadChildren: () => import("./solution/solution.module").then(m => m.SolutionModule)
      },
      {
        path: 'app-support',
        loadChildren: () => import("./support/support.module").then(m => m.SupportModule)
      },
      {
        path: 'app-about',
        loadChildren: () => import("./about/about.module").then(m => m.AboutModule)
      },
      {
        path: 'app-policies',
        loadChildren: () => import("./policies/policies.module").then(m => m.PoliciesModule)
      },
      {
        path: 'app-signup',
        loadChildren: () => import("./signup/signup.module").then(m => m.SignupModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
