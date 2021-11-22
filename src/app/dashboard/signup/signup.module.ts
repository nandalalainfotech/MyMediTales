import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [

    CommonModule,
    SignupRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSliderModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatSlideToggleModule

  ]
})
export class SignupModule { }
 
// ::ng-deep.mat-horizontal-stepper-header {
//   margin-top: -5px;
//   left: -131px;
//   display: unset!important;
//   padding: 19px 46px;
//   margin-left: -27px;
// }

// ::ng-deep.mat-step-icon {
//   font-weight: 500;
//   margin-left: 13px;
// }


// ::ng-deep.mat-horizontal-stepper-header-container {
//   white-space: nowrap;
//   display: flex;
//   align-items: center;
//   margin-bottom: 42px;
//   margin-top: -34px;
//   margin-right: -45px;
  /* margin-left: 100px; */
// }
// ::ng-deep.mat-stepper-header{
//   margin-right: 63px;
// }