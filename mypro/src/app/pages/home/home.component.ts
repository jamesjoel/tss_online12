import { Component, OnInit } from '@angular/core';
import { HelloService } from '../../services/hello.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name:string;
  constructor(public _helloServ : HelloService, private _http : HttpClient) { } // injectable 

  ngOnInit() {
  }

  hello($event){
    console.log($event);
    this.name=$event;
  }


  getdata(){
    this._http.get("http://localhost:3000/student").subscribe(function(res){
      console.log(res);
    });
  }

  // test(){
  //   this._helloServ.demo();
  // }

  /*
    1. getting data from server .get()
    2. sending data to server insert .post()
    3. sending data to server for update .put()
    4. sending data to server for delete .delete()


    for those 4 methods we have a url, then the url name is REST full API.


    www.james.com/api/teacher  --- Create, Retrive, Update, Delete 









    1. www.james.com/api/teacher ---- get
    2. www.james.com/api/teacher/save ---- post
    3. www.james.com/api/teacher/update ---- put
    4. www.james.com/api/teacher/delete ---- delete





  function hello(a){

  }

  var hello = function(a){


  }


  hello(a)=>{

  }












  */


}
