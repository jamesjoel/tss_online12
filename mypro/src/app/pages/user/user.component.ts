import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  index:number;
  user:any={
    name : "",
    age :null
  }
  allUser:any=[];

  constructor(private _user:UserService) { }

  ngOnInit() {
    // this._http.get("http://localhost:3000/user").subscribe(res=>{
    //   this.allUser=res;
    // });
    this._user.getUser().subscribe(res=>{
      this.allUser=res;
    })
  }
  add(){
    if(this.user.id){
      this._user.update(this.user).subscribe(res=>{
       // console.log(res);
        this.allUser[this.index]=this.user;
        /*for(let i = 0; i<this.allUser.length; i++)
        {
          if(this.allUser[i].id == this.user.id)
          {
            this.allUser[i]=this.user;
          }
        }*/
      })
    }
    else{
      this._user.save(this.user).subscribe(res => {
        this.allUser.push(res);
      })
    }
  }
  askDelete(obj){
    this.user = obj;
  }
  empty(){
    this.user={
      name : "",
      age : null
    }
  }
  delete(){
    this._user.remove(this.user).subscribe(res=>{
      //console.log(res);
      let n = this.allUser.indexOf(this.user);
      this.allUser.splice(n, 1);
    });
  }
  askEdit(obj){
    this.index = this.allUser.indexOf(obj);
    console.log("--------------",this.index)
    // this.user = obj;
    this.user = {...obj};
  }
}


/*

this._http.get("url").subscribe(function(res){

})





[
  {
    id : 5,
    name : "ram",  -------------button click ----- 14   --- id 5, name : "rohit", age : 25
    age : 30
  }
]

















*/