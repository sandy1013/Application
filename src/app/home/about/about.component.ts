import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @ViewChild('navbar') navbar: ElementRef;
  toggleMenu: boolean;

  constructor(private renderer: Renderer2,
  private router: Router) { 
    this.toggleMenu = false;
  }

  ngOnInit() {
  }
}
