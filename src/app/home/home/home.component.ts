import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  @ViewChild('navbar') navbar: ElementRef;
  toggleMenu: boolean;

  constructor(private renderer: Renderer2) { 
    this.toggleMenu = false;
  }

  ngOnInit() {
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
