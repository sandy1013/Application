import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../services/login.service';
import { CanActivateChild } from '@angular/router/src/interfaces';

@Injectable()
export class LoginGuard implements CanActivate, CanActivateChild {

  constructor(private loginService: LoginService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      
      console.log(`Is user logged in : ${this.loginService.isUserLoggedIn}`);

      if(this.loginService.isUserLoggedIn) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
       
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      
      return this.canActivate(next, state);
       
  }
}
