import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveComponent } from './archive/archive.component';
import { CarinCodeComponent } from './carin-code/carin-code.component';
import { PoliciesComponent } from './policies.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { SecurityComponent } from './security/security.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
  {
    path: "",
    component: PoliciesComponent,
    children: [
      {
        path: "app-terms",
        component: TermsComponent,
      },
      {
        path: "app-archive",
        component: ArchiveComponent,
      },
      {
        path: "app-security",
        component: SecurityComponent,
      },
      {
        path: "app-privacy-policy",
        component: PrivacyPolicyComponent,
      },
      {
        path: "app-carin-code",
        component: CarinCodeComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoliciesRoutingModule { }
