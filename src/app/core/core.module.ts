import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { LoginModule } from '../login/login.module';
import { HomeModule } from '../home/home.module';

import { CoreComponent } from './core/core.component';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    LoginModule,
    HomeModule
  ],
  declarations: [
    CoreComponent
  ],
  bootstrap: [CoreComponent]
})
export class CoreModule { }
