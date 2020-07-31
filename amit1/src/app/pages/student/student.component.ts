import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  index;
  stu={
    id : null,
    name : "",
    age : null
  }
  stuData = [
    {
      id : 1,
      name : "rohit",
      age : 25
    },
    {
      id : 2,
      name : "jaya",
      age : 30
    }
  ]

  constructor() { }

  ngOnInit() {
  }
  add($event){
    if($event.id){ // update code here
      this.stuData[this.index]=$event;
    }
    else{ // add new code here

      let count = this.stuData.length;
      $event.id = count++;
      this.stuData.push($event);
    }
  }

  clear(){
    this.stu={
      id : null,
      name : "",
      age : null
    }
  }

  askEdit(obj){
    // this.stu = obj;
    this.index = this.stuData.indexOf(obj);
    this.stu = {...obj}; // break 2-way data binding
  }

}
/*









*/