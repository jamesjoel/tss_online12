import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup }  from '@angular/forms';
/*
  formbuilder ---- service
  formgroup --- interface
  validators -- class


*/

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user:FormGroup;
  check:boolean=false;


  // [(ngModel)]="user.fullname"
  /*
  user:any={
    fullname : "",
    email : "",
    contact : null
  }


  */


  constructor(private _fb : FormBuilder) {

    // name="logo.jpg";

    this.user = this._fb.group(
      {
        fullname : ["", Validators.required],
        email : ["", [Validators.required, Validators.email]],
        password : ["", Validators.required],
        re_password : ["", Validators.required],
        contact : ["", Validators.required],
        city : ["", Validators.required],
        gender : ["", Validators.required]
        

      }
    );

   }

  ngOnInit() {
  }
  submit(){
    this.check = true;
  }

}
