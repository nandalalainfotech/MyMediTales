import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public checkboxarray: any;
  loginForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router) { }
  checkbox() {
    this.checkboxarray = [
      {
        name: 'Remember',
        checkboxlabelname: 'Remainder  Me'
      }
    ]
  }
  get f() { return this.loginForm.controls; }

  login() {
    this.submitted = true;
   
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    else{
      this.router.navigate(['/app-portal']);
    }
  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
}


