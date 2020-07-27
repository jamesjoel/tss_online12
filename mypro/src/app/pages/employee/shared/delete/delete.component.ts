import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  @Input() emp:any;
  @Output() sendToParent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  delete(){
    this.sendToParent.emit(this.emp);
    
  }

}
