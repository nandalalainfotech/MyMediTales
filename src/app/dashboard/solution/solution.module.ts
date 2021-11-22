import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolutionRoutingModule } from './solution-routing.module';
import { SolutionComponent } from './solution.component';
import { DevelopersSolutionComponent } from './developers-solution/developers-solution.component';
import { PatientSolutionComponent } from './patient-solution/patient-solution.component';
import { PayersSolutionComponent } from './payers-solution/payers-solution.component';
import { ProvidersSolutionComponent } from './providers-solution/providers-solution.component';


@NgModule({
  declarations: [
    SolutionComponent,
    DevelopersSolutionComponent,
    PatientSolutionComponent,
    PayersSolutionComponent,
    ProvidersSolutionComponent
  ],
  imports: [
    CommonModule,
    SolutionRoutingModule
    
  ]
})
export class SolutionModule { }
