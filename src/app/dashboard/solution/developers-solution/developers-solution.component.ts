import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-developers-solution',
  templateUrl: './developers-solution.component.html',
  styleUrls: ['./developers-solution.component.css']
})
export class DevelopersSolutionComponent implements OnInit {
providers:boolean = true;
patients:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
provider() {
  console.log("provider")
  this.providers = true;
  this.patients =false;
}

patient() {
  console.log("patient")
  this.patients = true;
  this.providers = false;
}

}
