import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMsg:string;
  user:any={
    username:"",
    password:""
  }
  constructor(private _loginServ : LoginService, private _router : Router) { }

  ngOnInit() {
  }
  login(){
    this._loginServ.doLogin(this.user).subscribe(res=>{
      localStorage.setItem("token", res.token);
      this._router.navigate(["/dashboard"]);
    },
    err=>{
      if(err.error.msgType==1)
      {
        this.errorMsg = "This Username and Password is incorrect !";
      }
      if(err.error.msgType==2)
      {
        this.errorMsg="This Password is incorrect !";
      }
    })
  }

}
