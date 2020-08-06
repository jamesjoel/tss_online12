import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  check:boolean = true;
  name:string="james";

  city:string="ujjain";

  color:string="redsdfgsdfg";

  constructor() { }

  ngOnInit() {
  }

}
