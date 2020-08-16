import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';




@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  allStu:any=[];
  index:number;
  

  student:FormGroup;
  check:Boolean = false;

  constructor(private _stuService : StudentService, private _fb : FormBuilder) {
    _stuService.getStudent().subscribe(res=>{
        this.allStu=res;
    });
    this.student = this._fb.group({
      _id : [""],
      name : ["", Validators.required],
      age : ["", Validators.required],
      city : ["", Validators.required],
      gender : ["", Validators.required],
    });






   }

  ngOnInit() {
  }
  update(){
    this.check=true;
    if(this.student.invalid){
      return;
    }
    //console.log(this.student.value);
    this._stuService.updateStudent(this.student.value).subscribe(res=>{
        // console.log(res);
        this.allStu[this.index]=res;
    })
  }

  askEdit(obj){
    // console.log(obj);
    this.index = this.allStu.indexOf(obj);
    // let newobj = {
    //   name : obj.namefull,
    //   age : obj.age
    // }
    console.log(this.index);
    this.student.setValue(obj);
  }

}
