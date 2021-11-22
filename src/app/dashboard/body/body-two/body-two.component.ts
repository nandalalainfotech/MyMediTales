import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-body-two',
	templateUrl: './body-two.component.html',
	styleUrls: ['./body-two.component.css']
})
export class BodyTwoComponent implements OnInit {
	patients: boolean = true;
	providers: boolean = false;
	payers: boolean = false;

	constructor() { }

	ngOnInit(): void { }

	patient() {
		console.log("patient")
		this.patients = true;
		this.providers = false;
		this.payers = false;
	}

	provider() {
		console.log("provider")
		this.patients = false;
		this.providers = true;
		this.payers = false;
	}

	payer() {
		console.log("payer")
		this.patients = false;
		this.providers = false;
		this.payers = true;
	}

}
