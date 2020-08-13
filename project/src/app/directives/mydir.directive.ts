import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';

// <h1 mydir>
@Directive({
  selector: '[mydir]'
})
export class MydirDirective {

  constructor(private _ele : ElementRef) {
    // console.log(_ele.nativeElement);
    _ele.nativeElement.style.backgroundColor="red";
    _ele.nativeElement.innerHTML="JAMES";
   }

   /*
   @HostListener("myeventname") anyfun(){

   }
   */
   @HostListener("click") clickFunction(){
     alert("hello");
   }

   @HostListener("mouseout") demo(){
    this._ele.nativeElement.style.backgroundColor="blue";
   }





}
