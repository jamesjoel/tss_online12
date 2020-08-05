import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http : HttpClient) { }

  doLogin(obj){
    // http://localhost:3000/api/login --- POST
    // console.log("-------------", obj);
    return this._http.post<any>("http://localhost:3000/api/login", obj);
  }
  isLoggedIn(){
    if(localStorage.getItem("token")){
      return true;
    }else{
      return false;
    }
  }





}
/*
  return this._http.post<any>
  return this._http.get<any>
  return this._http.put<any>
  return this._http.delete<any>


*/