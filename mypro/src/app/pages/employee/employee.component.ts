import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  emp:any={
    name : "",
    city : "",
    salary : null
  }
  empData:any=[
    {
      name : "rohit",
      city : "indore",
      salary : 5000
    },
    {
      name : "nidhi",
      city : "ujjain",
      salary : 7200
    }
  ];

  constructor() { }

  ngOnInit() {
  }
  add($event){
    // console.log($event);
    this.empData.push($event);
    this.emp={
      name : "",
      city : "",
      salary : null
    }
  }
}
