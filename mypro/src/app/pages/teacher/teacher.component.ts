import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  teacher:any={
    name : "",
    salary : null
  }
  allTeacherData:any=[];
  constructor() { }

  ngOnInit() {
  }
  save(){
    // console.log(this.teacher);
    this.allTeacherData.push(this.teacher);
    this.teacher={
      name : "",
      salary : null
    }
  }

}
