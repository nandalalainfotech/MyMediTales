import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutTeamRoutingModule } from './about-team-routing.module';
import { AboutTeamComponent } from './about-team.component';


@NgModule({
  declarations: [
    AboutTeamComponent
  ],
  imports: [
    CommonModule,
    AboutTeamRoutingModule
  ]
})
export class AboutTeamModule { }
