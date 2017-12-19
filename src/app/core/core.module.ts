import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { SharedModule } from '../shared/shared.module';
import { LoginModule } from '../login/login.module';
import { HomeModule } from '../home/home.module';

import { LoginService } from '../shared/services/login.service';

import { CoreComponent } from './core/core.component';

import { LoginGuard } from '../shared/Gaurds/login.guard';
import { LoginResolve } from '../shared/Resolvers/login.resolve';
import { HomeDeactivate } from '../shared/Gaurds/home.deactivate.gaurd';
import { CoreRouter } from './core.router';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    LoginModule,
    HomeModule,
    CoreRouter
  ],
  declarations: [
    CoreComponent
  ],
  providers: [
    LoginService,
    LoginGuard,
    LoginResolve,
    HomeDeactivate
  ],
  bootstrap: [CoreComponent]
})
export class CoreModule { }
