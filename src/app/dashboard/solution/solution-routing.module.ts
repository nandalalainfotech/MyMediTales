import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pathToFileURL } from 'url';
import { DevelopersSolutionComponent } from './developers-solution/developers-solution.component';
import { PatientSolutionComponent } from './patient-solution/patient-solution.component';
import { PayersSolutionComponent } from './payers-solution/payers-solution.component';
import { ProvidersSolutionComponent } from './providers-solution/providers-solution.component';
import { SolutionComponent } from './solution.component';

const routes: Routes = [
  {
    path:"",
    component: SolutionComponent,
    children:[
      {
        path:'app-developers-solution',
        component:DevelopersSolutionComponent
      },
      {
        path:'app-patient-solution',
        component:PatientSolutionComponent
      },
      {
        path:'app-payers-solution',
        component:PayersSolutionComponent
      },
      {
        path:'app-providers-solution',
        component:ProvidersSolutionComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolutionRoutingModule { }
