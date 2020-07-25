import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {
  @Input() nameChild:string;
  @Input() xyz:string;
  @Input() fullName:string;
  constructor() { }

  ngOnInit() {
  }

}

/*
class A{
  x:any;
  constructor(name)
  {
    this.x = name;
  }
}

let obj = new A('rohit');


@A('rohit')





*/