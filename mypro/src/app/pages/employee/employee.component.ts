import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  index:number;
  emp:any={
    id : null,
    name : "",
    city : "",
    salary : null
  }
  empData:any=[
    {
      id : 1,
      name : "rohit",
      city : "indore",
      salary : 5000
    },
    {
      id : 2,
      name : "nidhi",
      city : "ujjain",
      salary : 7200
    },
    {
      id : 3,
      name : "gaurav",
      city : "mhow",
      salary : 5300
    }
  ];

  constructor() { }

  ngOnInit() {
  }
  add($event){
    // console.log($event);
    if($event.id){ // udpate code here
      this.empData[this.index]=$event;
    }
    else{ // add new code

      let count = this.empData.length;
      $event.id = count;
      this.empData.push($event);
    }
    
  }
  askAdd(){
    this.emp = {
      id : null,
      name: "",
      city: "",
      salary: null
    }
  }
  askDelete(obj){
    this.emp = obj;
  }
  delete($event){
    let n = this.empData.indexOf($event);
    this.empData.splice(n, 1);
    
  }
  askEdit(obj){
    // this.emp = obj;
    this.index = this.empData.indexOf(obj);
    this.emp = {...obj};
  }
}
