import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  fullName="";
  name="";
  constructor() { }

  ngOnInit() {
  }
  demo(){
    // alert(this.name);
    this.fullName = this.name;
  }

}
