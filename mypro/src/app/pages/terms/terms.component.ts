import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {

  money = 100;

  d = new Date();

  name="rohit";
  arr = [
    {
      names : "rohit",
      age : 25,
      city : "indore",
      salary : 5000,
      gender : "male"
    },
    {
      names: "james",
      age: 22,
      city: "ujjain",
      salary : 7500,
      gender : "male"
    },
    {
      names: "jaya",
      age: 30,
      city: "indore",
      salary : 2300,
      gender : "female"
    },
    {
      names: "amit",
      age: 22,
      city: "indore",
      salary : 5300,
      gender : "male"
    },
    {
      names: "nidhi",
      age: 25,
      city: "ujjain",
      salary : 8500,
      gender :"female"
    },
    {
      names: "parul",
      age: 21,
      city: "ujjain",
      salary: 1000,
      gender: "female"
    }
]

  constructor() { }

  ngOnInit() {
  }

}
