import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { BodyOneComponent } from './body/body-one/body-one.component';
import { BodyThreeComponent } from './body/body-three/body-three.component';
import { BodyTwoComponent } from './body/body-two/body-two.component';
import { BodyComponent } from './body/body.component';
import { Body456Component } from './body/body456/body456.component';
import { Body7Component } from './body/body7/body7.component';
import { Body8Component } from './body/body8/body8.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    BodyOneComponent,
    BodyTwoComponent,
    BodyThreeComponent,
    Body456Component,
    Body7Component,
    Body8Component,
    AboutComponent,
    LoginComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  providers: [],
  exports: [],

})
export class DashboardModule { }
