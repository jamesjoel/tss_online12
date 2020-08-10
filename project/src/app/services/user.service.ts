import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http : HttpClient, private _loginService : LoginService) { }

  getUserInfo(){
    return this._http.get<any>("http://localhost:3000/api/user");
  }
  /*


  return this._http.post<any>("url", obj, {
    headers : { Authorization : this._loginService.getToken() }
  })
  */
}
