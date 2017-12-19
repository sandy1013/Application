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
  text: string;
  createdDate: Date;

  constructor(private renderer: Renderer2,
  private router: Router) { 
    this.toggleMenu = false;
    this.text = `
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro commodi facere officiis cumque consectetur. Nihil error iste doloremque, laboriosam praesentium, necessitatibus corporis dolore in repudiandae ad, minus veritatis consequatur obcaecati.
    `;
    this.createdDate = new Date();

  }

  ngOnInit() {
  }
}
