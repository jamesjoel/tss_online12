import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  getUser(){
    return this._http.get("http://localhost:3000/user");
  }
  save(obj){
    return this._http.post("http://localhost:3000/user", obj);
  }
  remove(obj){
    return this._http.delete("http://localhost:3000/user/"+obj.id);
  }
  update(obj){
    return this._http.put("http://localhost:3000/user/"+obj.id, obj);
  }

}
/*
method : delete()
url : http://localhost:3000/user/{ id : 2, }



*/