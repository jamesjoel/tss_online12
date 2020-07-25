import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.scss']
})
export class AddnewComponent implements OnInit {
  @Input() emp;
  @Output() goToParent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  add(){
    this.goToParent.emit(this.emp);
  }

}
