import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../services/login.service';
import { CanActivateChild } from '@angular/router/src/interfaces';

@Injectable()
export class LoginGuard implements CanActivate, CanActivateChild {

  constructor(private loginService: LoginService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      
      console.log(`Is user logged in : ${this.loginService.isUserLoggedIn}`);

      if(this.loginService.isUserLoggedIn) {
        return true;
      } else {
        return false
      }
       
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      
      return this.canActivate(next, state);
       
  }
}
