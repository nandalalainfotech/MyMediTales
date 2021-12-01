import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import("./dashboard/dashboard.module").then(m => m.DashboardModule)
    },
    {
        path: 'app-portal',
        loadChildren: () => import("../portal/portal.module").then(m => m.PortalModule)
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
