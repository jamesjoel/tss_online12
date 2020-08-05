import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user={
    username : "",
    password : ""
  }
  errorMsg:string="";

  constructor(private _loginService : LoginService, private _router : Router) { }

  ngOnInit() {
  }
  login(){
    this._loginService.doLogin(this.user).subscribe(res=>{
      // cookies -- 147kb
      // console.log(res);
      localStorage.setItem("token", res.token);
      this._router.navigate(["/profile"]);
      
    //  localStorage.setItem("name", "rohit");
     // localStorage.getItem("name");  -- 2mb
     /*
       Browser Cookie 
        1. form entry
        2. password
        3. history
        4. cache
        5. data ---- DEV
        6. localStorage --- 2 mb


     */
    },
    err=>{ // 400 HTTP error code return
      // console.log(err.error);
      if(err.error.msgType==1)
      {
        this.errorMsg="This Username and Passwrod is Incorrect";
      }
      if (err.error.msgType == 2) {
        this.errorMsg = "This Passwrod is Incorrect";
      }
    });
  }

}
