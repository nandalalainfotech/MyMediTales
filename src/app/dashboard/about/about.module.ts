import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutPatientPartnersComponent } from './about-patient-partners/about-patient-partners.component';
import { AboutTeamComponent } from './about-team/about-team.component';


@NgModule({
  declarations: [AboutPatientPartnersComponent,AboutTeamComponent],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
