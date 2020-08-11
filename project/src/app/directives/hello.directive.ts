import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[hello]'
})
export class HelloDirective {

  constructor(private _el : ElementRef) {
    console.log(_el);
    _el.nativeElement.style.backgroundColor="red";
  }
  
  @HostListener('click') any(){
    alert("this is demo direcitve");
  }
  @HostListener('mouseover') demo(){
    
    this._el.nativeElement.style.backgroundColor="green";
   }

}
