import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompFailure]',
  standalone: true
})
export class CompFailureDirective {

  // it is a parametrized constructor it needs object of type ElementRef
  constructor( private obj : ElementRef ) {}

  @HostListener ('mouseenter') onmouseenter()
  {
    this.obj.nativeElement.style.backgroundColor = 'green';
  }

  @HostListener ('mouseleave') onmouseleave()
  {
    this.obj.nativeElement.style.backgroundColor = 'white';
  }

}
