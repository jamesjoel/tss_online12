import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  @Input() stu;
  @Output() myEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  add(){
    this.myEvent.emit(this.stu);
  }

}
