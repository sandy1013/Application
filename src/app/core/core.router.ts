import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../home/home/home.component";
import { LoginGuard } from "../shared/Gaurds/login.guard";
import { DashboardComponent } from "../home/dashboard/dashboard.component";
import { HomeDeactivate } from "../shared/Gaurds/home.deactivate.gaurd";
import { LoginResolve } from "../shared/Resolvers/login.resolve";
import { AboutComponent } from "../home/about/about.component";

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: 'home', component: HomeComponent, canActivateChild: [LoginGuard], children:[
            { path: '', component: DashboardComponent, canDeactivate: [HomeDeactivate], resolve: 
            { userData : LoginResolve }},
            { path: 'dashboard', component: DashboardComponent, canDeactivate: [HomeDeactivate], resolve: 
            { userData : LoginResolve } },
            { path: 'about', component: AboutComponent}
         ]
    },
    { path: '**', redirectTo: '/login'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class CoreRouter {

}