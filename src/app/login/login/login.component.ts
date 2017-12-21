import { Component, OnInit, OnDestroy } from '@angular/core';

import { LoginService } from '../../shared/services/login.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  myObservable: Observable<string>;
  loginForm: FormGroup;

  // errors = {
  //   'username': {
  //     error : false
  //   },
  //   'password': {
  //     error : false
  //   }
  // };
  constructor(private loginService: LoginService,
  private router: Router, private fb: FormBuilder) { 
    // this.loginForm = new FormGroup({
    //   username: new FormControl('', [Validators.required]),
    //   password: new FormControl('', [Validators.required])
    // });

   this.loginForm = this.fb.group({
     username: ['', [Validators.required, Validators.email, Validators.pattern('')]],
     password: ['', [Validators.required]]
   }) 
  }

  ngOnInit() {
    //this.createObservable();

    // this.loginForm.valueChanges.subscribe((values: any) => {
    //   console.log(values);
    // });
  }

  createObservable() {
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

  onSubmit(form: NgForm) {
    // console.log(form);

    // if (!form.valid) {
    //   for(let control in form.controls) { 
    //     if(form.controls[control].errors) {
    //         this.errors[control].error = true;
    //     }
    //   }
      
    //   console.log(this.errors);
    // }

    console.log(this.loginForm);

  }

  
  ngOnDestroy() {
    //this.myObservable.unsubscribe();
  }

  onLogin() {
    // this.loginService.isUserLoggedIn = true;
    // this.router.navigate(['/home']);


  }
}
