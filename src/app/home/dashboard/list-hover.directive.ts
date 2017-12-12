import { Directive, ElementRef, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appListHover]'
})
export class ListHoverDirective implements OnInit{
  @Input('color') userColor: string;
  
  @HostBinding('style.background-color') backgroundColor = '';

  @HostListener('mouseenter') onmouseenter() {
    this.backgroundColor = this.userColor;
  }

  @HostListener('mouseleave') onmouseleave() {
    this.backgroundColor = '';
  }

  constructor(private element: ElementRef) { }

  ngOnInit() {
    //console.log(this.userColor);
    //console.log(this.element.nativeElement);
  }
}
