import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  user:any={
    name : "", //string
    age : null, // number


  }
  name:string="rohit";

  gender:string="";

  city : string = "mumbai";

  constructor() { }

  ngOnInit() {
  }

}
