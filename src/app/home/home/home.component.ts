import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LoginService } from '../../shared/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('navbar') navbar: ElementRef;
  toggleMenu: boolean;

  constructor(private renderer: Renderer2,
    private router: Router,
  private route: ActivatedRoute,
  private loginService: LoginService) { 
    this.toggleMenu = false;
  }

  onLogout() {
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    //console.log(this.route.snapshot.params);

    this.route.params.subscribe((params: Params)  => {
      console.log(params);
    });

    this.route.queryParams.subscribe((params: Params)  => {
      console.log(params);
    });

    this.route.fragment.subscribe((params: string)  => {
      console.log(params);
    });
  }

  onHome() {
    this.router.navigate(['/home']);
  }

  onMenu() {
    this.toggleMenu = !this.toggleMenu;

    if (this.toggleMenu) {
      this.renderer.addClass(this.navbar.nativeElement, 'in');
    } else {
      this.renderer.removeClass(this.navbar.nativeElement, 'in');
    }
  }
}
