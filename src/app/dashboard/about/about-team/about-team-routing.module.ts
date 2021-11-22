import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutTeamComponent } from './about-team.component';

const routes: Routes = [
  {
    path: "",
    component: AboutTeamComponent,
    // children: [
    //   {
    //     path: "app-about-team",
    //     component: AboutTeamComponent,
    //   },
      // {
      //   path: "app-resource-center",
      //   component: ResourceCenterComponent,
      // },
      // {
      //   path: "app-contactus",
      //   component: ContactusComponent,
      // }
  
//     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutTeamRoutingModule { }
