import { Component, OnInit, OnDestroy } from '@angular/core';

import { LoginService } from '../../shared/services/login.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  myObservable: Observable<string>;
  constructor(private loginService: LoginService,
  private router: Router) { }

  ngOnInit() {
    this.myObservable = Observable.create((observer: Observer<string>) => {
        setInterval(() => {
          observer.next('some string');
        }, 2000);
    });

    this.myObservable.subscribe((data: string) => {
      console.log(data);
    }, error => {
      console.log(error);
    }, () => {

    });
  }

  ngOnDestroy() {
    //this.myObservable.unsubscribe();
  }

  onLogin() {
    this.loginService.isUserLoggedIn = true;
    this.router.navigate(['/home']);
  }
}
