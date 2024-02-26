import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]',
  standalone: true
})
export class CompSuccessDirective {

  constructor( private obj : ElementRef) {}

  @HostListener ('mouseenter') onmouseenter()
  {
    //this.obj.nativeElement.style.backgroundColor = 'red';
    this.obj.nativeElement.style.color = 'red';
  }

  @HostListener ('mouseleave') onmouseleave()
  {
    //this.obj.nativeElement.style.backgroundColor = 'white';
    this.obj.nativeElement.style.color = 'black';
  }
}
