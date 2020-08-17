import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path : "",
    loadChildren: "./visitor/visitor.module#VisitorModule"// lazy loading
  },
  {
    path: "teacher",
    loadChildren: "./teacher/teacher.module#TeacherModule"
  },
  {
    path: "student",
    loadChildren: "./student/student.module#StudentModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
