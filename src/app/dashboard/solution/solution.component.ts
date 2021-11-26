import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("called")
  }

  onActivate(event: any) {
    window.scroll(0,0);
  }
  
}
