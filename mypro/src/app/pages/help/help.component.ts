import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  nameParent:string="rohit";
  abc:string;
  fullName:string;
  tempName:string;

  constructor() { }

  ngOnInit() {
  }

  goToParent(){
    this.tempName = this.fullName;
  }

}
