import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor() { }

  demo(x){
    console.log("service call---------", x);
    console.log("hello world");
  }

}

/*
class A{

  name;

  constructor(private test){
    this.name = test;
  }

  demo(){
    console.log("hello");
  }

}

let x = new A("rohit"); --- creating a object for class A








*/