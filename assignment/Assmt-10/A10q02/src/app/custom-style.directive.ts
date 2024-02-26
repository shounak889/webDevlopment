import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private obj : ElementRef) 
  
  {
    obj.nativeElement.style.backgroundColor = 'yellow';
    obj.nativeElement.style.fontWeight = 'bold';
    
  }

 
}
