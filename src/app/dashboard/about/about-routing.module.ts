import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCommunityComponent } from './about-community/about-community.component';
import { AboutMediaComponent } from './about-media/about-media.component';
import { AboutPatientPartnersComponent } from './about-patient-partners/about-patient-partners.component';
import { AboutTeamComponent } from './about-team/about-team.component';
import { AboutComponent } from './about.component';

const routes: Routes = [{
  path:"",
  component:AboutComponent,
  children:[
    {
      path:'app-about-team',
      component:AboutTeamComponent
    },
    {
      path:'app-about-patient-partners',
      component:AboutPatientPartnersComponent
    },
    {
      path:'app-about-community',
      component:AboutCommunityComponent
    },
    {
      path:'app-about-media',
      component:AboutMediaComponent
    },
   
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
