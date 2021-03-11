import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ErrorPageComponent } from "./error-page/error-page.component";

const appRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'admin', component: AdminComponent },
    { path: '**', component: ErrorPageComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true})
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}