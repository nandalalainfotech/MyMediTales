import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoliciesRoutingModule } from './policies-routing.module';
import { SecurityComponent } from './security/security.component';
import { ArchiveComponent } from './archive/archive.component';
import { TermsComponent } from './terms/terms.component';
import { PoliciesComponent } from './policies.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CarinCodeComponent } from './carin-code/carin-code.component';


@NgModule({
  declarations: [
    SecurityComponent,
    ArchiveComponent,
    TermsComponent,
    PoliciesComponent,
    PrivacyPolicyComponent,
    CarinCodeComponent
  ],
  imports: [
    CommonModule,
    PoliciesRoutingModule
  ]
})
export class PoliciesModule { }
