import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {
  
  @Output() childEvent = new EventEmitter();

  name:string;
  constructor() { }

  ngOnInit() {
  }

  demo(){
    this.childEvent.emit(this.name);
  }


}
