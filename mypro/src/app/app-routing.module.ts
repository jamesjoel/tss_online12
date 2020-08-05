import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { HelpComponent } from './pages/help/help.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SignupComponent } from './pages/signup/signup.component';
import { StudentComponent } from './pages/student/student.component';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { UserComponent } from './pages/user/user.component';
import { TermsComponent } from './pages/terms/terms.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    path : "about",
    component : AboutComponent
    
  },
  {
    path : "",
    component : HomeComponent
  },
  {
    path : "contact",
    component : ContactComponent
  },
  {
    path : "help",
    component : HelpComponent
  },
  { 
    path : "signup",
    component : SignupComponent
  },
  {
    path : "student",
    component : StudentComponent
  },
  {
    path : "teacher",
    component : TeacherComponent
  },
  {
    path : "employee",
    component : EmployeeComponent
  },
  {
    path : "user",
    component : UserComponent
  },
  {
    path : "terms",
    component : TermsComponent
  },
  {
    path : "login",
    component : LoginComponent
  },
  {
    path : "profile",
    component : ProfileComponent
  },
  {
    path : "**",
    component : NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
//  @demo()
export class AppRoutingModule { }

/*

var(x) ---------------------- let/const

export class A{
  x; // wrong code
  x:any;
  x:any = 100;
  y:string = "rohit"; // property

  data:any[] = ["red", "green", "blue", 100, true];
  data:any[]=[];


  obj1:Hello = {
    name : "rohit",
    age : 25,
    city : "indore",
    salary : 5000
  }
  obj2:Hello = {
    name : "rohit",
    age : 25,
    city : "indore"
    
  }
  obj3:Hello{
    city : "ujjain"
  }

  stuData:Hello[] = [
    {
      name : "rohit",
      age  25
    },
    {
      name : "jaya",
      age : 30,
      city : "indore"
    },
    {
      name : "nidhi",
      age : 23,
      city : "bhopal"      
    }
  ];
  interface Hello{
    name? : string;
    age? : any;
    city? : string|number;
    salary? : number;
  }





  name = "Nidhi"; ---- Not TypeCast
  name:string = "Nidhi"; ------- TypeCase



  demo(){ --------------- Method
    let a = 500;
    const b = "james";
  }
  demo2(n){
    this.y = n;
    this.demo();
  }
}
let obj = new A();
let name = obj.y;
obj.demo2("indore");
let name2 = obj.y;

class B{
  x;
  y;
  constructor(a, b){
    this.x = a;
    this.y = b;
  }
  sum(){
    let ans = this.x+this.y;
    console.log(ans);
  }
}
let obj = new B(200, 300);
obj.sum();


interface Emp {
  name : string;
  salary : number;
  city? : string;
}

employee:Emp[] = [
  {
    name : "Rohit",
    salary : 5000
  },
  {
    name : "james",
    salary : 7500,
    city : "ujjain"
  }
]
























*/


