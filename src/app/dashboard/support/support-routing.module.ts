import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { ResourceCenterComponent } from './resource-center/resource-center.component';
import { SupportComponent } from './support.component';

const routes: Routes = [
  {
    path: "",
    component: SupportComponent,
    children: [
      {
        path: "app-help-center",
        component: HelpCenterComponent,
      },
      {
        path: "app-resource-center",
        component: ResourceCenterComponent,
      },
      {
        path: "app-contactus",
        component: ContactusComponent,
      }
  
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportRoutingModule { }
