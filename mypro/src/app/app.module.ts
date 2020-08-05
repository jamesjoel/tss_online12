import { NgModule } from '@angular/core';// this is Main class 
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { BrowserModule } from '@angular/platform-browser'; // this is for browser event
import { AppRoutingModule } from './app-routing.module';




import { AppComponent } from './app.component';
import { BoxComponent } from './shared/box/box.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HelpComponent } from './pages/help/help.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SignupComponent } from './pages/signup/signup.component';
import { StudentComponent } from './pages/student/student.component';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { TeacherTableComponent } from './shared/teacher-table/teacher-table.component';
import { BlockComponent } from './shared/block/block.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { AddnewComponent } from './pages/employee/shared/addnew/addnew.component';
import { DeleteComponent } from './pages/employee/shared/delete/delete.component';
import { UserComponent } from './pages/user/user.component';
import { TermsComponent } from './pages/terms/terms.component';
import { HalfPipe } from './pipes/half.pipe';
import { BonusPipe } from './pipes/bonus.pipe';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';


@NgModule({ // Decorator
  declarations: [ // component, pipes, directive, guard, intersecptor
    AppComponent,
    BoxComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HelpComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    SignupComponent,
    StudentComponent,
    TeacherComponent,
    TeacherTableComponent,
    BlockComponent,
    EmployeeComponent,
    AddnewComponent,
    DeleteComponent,
    UserComponent,
    TermsComponent,
    HalfPipe,
    BonusPipe,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
