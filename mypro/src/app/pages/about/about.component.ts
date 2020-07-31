import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about', // <app-about></app-about>
  templateUrl: './about.component.html',
  // template : "<h1>hello</h1>",
  styleUrls: ['./about.component.scss']
})
export class AboutComponent{
  name:string="rohit";
  stu:any={
    name : "james",
    age : 25,
    salary : 5000
  }
  address:string="B-29, Sampat Hills, AB Bypass, Indore";

  hello:string="mytext";
  imgPath: string ="./assets/images/1.jpg";



  constructor() { }

  
  
}
