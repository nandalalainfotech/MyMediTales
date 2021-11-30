import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutPatientPartnersComponent } from './about-patient-partners/about-patient-partners.component';
import { AboutTeamComponent } from './about-team/about-team.component';
import { BlogOneComponent } from './blog-one/blog-one.component';


@NgModule({
  declarations: [AboutPatientPartnersComponent,AboutTeamComponent, BlogOneComponent],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
