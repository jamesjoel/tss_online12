import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';


@NgModule({
  declarations: [TeacherComponent, HeaderComponent, LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ],
  bootstrap : [TeacherComponent]
})
export class TeacherModule { }
