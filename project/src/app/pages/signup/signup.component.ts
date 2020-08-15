import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup }  from '@angular/forms';
import { PasswordMatch, contactLength, isNumeric } from '../../helpers/custome.validator';

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

    /*
      {
        id : 5,
        fullname : "james",
        email : "jamse@gmail.com",
        password : 123,
        contact : 22558,
        gender : "male"
        hobby : ["circket", "music"]
      }




    */

    // name="logo.jpg";

    this.user = this._fb.group(
      {
        fullname : ["", Validators.required],
        email : ["", [Validators.required, Validators.email]],
        password : ["", Validators.required],
        re_password : ["", Validators.required],
        contact : ["", Validators.required],
        city : ["", Validators.required],
        gender : ["", Validators.required],
        address : [""]
      },
      {
        validator: [
            PasswordMatch('password', 're_password'), 
            contactLength('contact'), 
            isNumeric('contact')
          ]
      }
    );

   }

  ngOnInit() {
  }
  submit(){
    this.check = true;
    if(this.user.invalid){
      return false;
    }
    console.log(this.user.value);
    // continue to service and send data to server
  }

}
