import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public checkboxarray : any;
  constructor() { }

  ngOnInit(): void {
  }
  checkbox() {
    this.checkboxarray = [
      {
       name: 'Remember',
       //checked : true,
       checkboxlabelname: 'Remainder  Me'
      } 
     ]
  }

}
