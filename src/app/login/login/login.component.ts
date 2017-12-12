import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../shared/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,
  private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    this.loginService.isUserLoggedIn = true;
    this.router.navigate(['/home']);
  }
}
