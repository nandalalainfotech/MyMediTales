
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit  {
  isLinear = true;
  formPinGroup: FormGroup;
  formPhoneGroup: FormGroup;
  formTermGroup: FormGroup;
  formNameGroup: FormGroup | any;
  formPasswordGroup: FormGroup | any;
  formEmailGroup: FormGroup | any;
  formDoneGroup: FormGroup | any;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  ngOnInit(): void {
  }
  createForm() {
    this.formNameGroup = this.fb.group({
      userName: ['', Validators.required]
    });

    this.formPasswordGroup = this.fb.group({
    passWord1: ['', Validators.required],
      passWord2: ['', Validators.required]
    });
    this.formEmailGroup = this.fb.group({
      emailID: ['', Validators.compose([Validators.required, Validators.email])]
    });
    this.formPinGroup = this.fb.group({
      pin: ['', Validators.required],
    });
    this.formPhoneGroup = this.fb.group({
      // phone: ['', Validators.required ],
      phone:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]  ,
    });
    this.formTermGroup = this.fb.group({
    });
    this.formDoneGroup = this.fb.group({
    });

  }
  // rgb(241, 243, 243);
}