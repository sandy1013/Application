import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';

import { LoginRouter } from './login.router';

@NgModule({
  imports: [
    SharedModule,
    LoginRouter
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
