import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name="rohit";
  age = 25;
  obj = {
    name : "james",
    age : 25,
    city : "indore",
    salary : 5000
  };

  arr = ["red", "green", "blue", "yellow"];

  data = [
    {
      name : "jaya",
      age : 25,
      city : "indore"
    },
    {
      name : "amit",
      age : 23,
      city : "ujjain"
    },
    {
      name : "nidhi",
      age : 26,
      city : "bhopal"
    },
    {
      name : "gaurav",
      age : 22,
      city :"mhow"
    },
    {
      name : "nilesh",
      age : 28,
      city :"indore"
    }
  ]


  constructor() { }

  ngOnInit() {
  }

}
