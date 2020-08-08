import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private _router : Router, private _loginService : LoginService){

  }
  canActivate(){
    if(this._loginService.getToken()){
      return true;
    }else{
      this._router.navigate(["/login"]);
      return false;
    }
  }
  
}
