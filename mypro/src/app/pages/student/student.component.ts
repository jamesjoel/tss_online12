import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  stu:any={
    name : "",
    age : null
  }

  data : any =[
    {
      name : "rohit",
      age : 25
    },
    {
      name : "james",
      age : 26
    },
    {
      name : "nidhi",
      age : 30
    }
  ];

  color:any=["red", "green", "blue"];

  constructor() { }

  ngOnInit() {
  }
  add(){
    
  }

}
/*
  1. for
  2. while
  3. do...while
  4. forEach




*/