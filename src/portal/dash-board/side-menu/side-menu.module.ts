import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SideMenuRoutingModule } from './side-menu-routing.module';
import { SideMenuComponent } from './side-menu.component';


@NgModule({
  declarations: [
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    SideMenuRoutingModule
  ]
})
export class SideMenuModule { }
