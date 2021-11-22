import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportRoutingModule } from './support-routing.module';
import { SupportComponent } from './support.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ResourceCenterComponent } from './resource-center/resource-center.component';
import { HelpCenterComponent } from './help-center/help-center.component';

@NgModule({
  declarations: [
    SupportComponent,
    HelpCenterComponent,
    ResourceCenterComponent,
    ContactusComponent
  ],
  imports: [
    CommonModule,
    SupportRoutingModule
  ]
})
export class SupportModule { }
