import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // use [(ngModel)]



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HelpComponent } from './pages/help/help.component';
import { BoxComponent } from './shared/box/box.component';
import { CircleComponent } from './shared/circle/circle.component';
import { StudentComponent } from './pages/student/student.component';
import { AddComponent } from './pages/student/shared/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HelpComponent,
    BoxComponent,
    CircleComponent,
    StudentComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
let / const

a.js
export class Student{   ----------- Make a class
     name="rohit";   ------------- Make their Data member (Propety)
     age = 25; ------------- Make their Data member (Propety)

     sum(){  --------------- Make their Method (function)
        console.log("hello world");
     }
     divide(){
       ----- "this" --------- is a keyword which can indentify their own class object
       let a = "amit";
       console.log("my name is "+this.name);
       this.sum();
     }
}

let obj1 = new Student; -------------- Make a object from class "Student"
obj1.sum();
let x = obj1.name;
obj1.divide();



import { Student } from './a';




*/

