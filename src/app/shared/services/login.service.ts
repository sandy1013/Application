import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  isUserLoggedIn: boolean;

  constructor() { 
    this.isUserLoggedIn = false;
  }

}
