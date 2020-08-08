import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user:any;
  constructor(private _userService : UserService) { }

  ngOnInit() {
  }
  demo(){
    this._userService.getUserInfo().subscribe(res=>{
      console.log(res);
      this.user=res;
    })
  }

}
