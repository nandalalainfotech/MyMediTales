import { Component, OnInit } from '@angular/core';

import { transition, trigger, useAnimation } from "@angular/animations";
import { SidebarCloseAnimation, SidebarOpenAnimation } from './animations';
const animationParams = {
  menuWidth: "250px",
  animationStyle: "500ms ease"
};
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
  animations: [
    trigger("sideMenu", [
      transition(":enter", [
        useAnimation(SidebarOpenAnimation, {
          params: {
            ...animationParams
          }
        })
      ]),
      transition(":leave", [
        useAnimation(SidebarCloseAnimation, {
          params: {
            ...animationParams
          }
        })
      ])
    ])
  ]
})
export class SideMenuComponent implements OnInit {
  isOpen?:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

}
