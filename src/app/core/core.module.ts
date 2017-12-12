import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { SharedModule } from '../shared/shared.module';
import { LoginModule } from '../login/login.module';
import { HomeModule } from '../home/home.module';

import { LoginService } from '../shared/services/login.service';

import { CoreComponent } from './core/core.component';

import { LoginComponent } from '../login/login/login.component';
import { HomeComponent } from '../home/home/home.component';
import { AboutComponent } from '../home/about/about.component';
import { LoginGuard } from '../shared/Gaurds/login.guard';
import { DashboardComponent } from '../home/dashboard/dashboard.component';
import { LoginResolve } from '../shared/Resolvers/login.resolve';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivateChild: [LoginGuard],children:      [
          { path: '', component: DashboardComponent, resolve: 
          { userData : LoginResolve }},
          { path: 'dashboard', component: DashboardComponent, resolve: 
          { userData : LoginResolve } },
          { path: 'about', component: AboutComponent}
       ]
  },
  { path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(routes),
    LoginModule,
    HomeModule
  ],
  declarations: [
    CoreComponent
  ],
  providers: [
    LoginService,
    LoginGuard,
    LoginResolve
  ],
  bootstrap: [CoreComponent]
})
export class CoreModule { }
