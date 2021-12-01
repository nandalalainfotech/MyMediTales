import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardRoutingModule } from './dash-board-routing.module';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { DashBoardComponent } from './dash-board.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SideMenuComponent,
    BodyComponent,
    FooterComponent,
    DashBoardComponent
  ],
  imports: [
    CommonModule,
    DashBoardRoutingModule
  ]
})
export class DashBoardModule { }
