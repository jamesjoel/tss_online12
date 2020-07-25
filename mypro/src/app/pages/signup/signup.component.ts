import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  reg:any={
    fullName : "",
    email : "",
    password : "",
    gender : "",
    city : ""
  };

  constructor() { }

  ngOnInit() {
  }
  save(){
    console.log(this.reg);
  }

}
/*
  DOM Event




*/
