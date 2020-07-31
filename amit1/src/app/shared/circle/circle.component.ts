import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent implements OnInit {

  @Output() myEvent = new EventEmitter();
  @Input() childName;
  constructor() { }

  ngOnInit() {
  }
  demo(){
    this.myEvent.emit("amit verma");
  }



}
