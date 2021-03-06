import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { BashboardComponent } from './pages/bashboard/bashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';

import { TokenInterceptor } from './intercept/token.interceptor';
import { AboutComponent } from './pages/about/about.component';
import { BtnComponent } from './shared/btn/btn.component';
import { HelloDirective } from './directives/hello.directive';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { MydirDirective } from './directives/mydir.directive';
import { SignupComponent } from './pages/signup/signup.component';
import { StudentComponent } from './pages/student/student.component';

@NgModule({
  declarations: [ // component, pipes, direvictes
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    BashboardComponent,
    ProfileComponent,
    AboutComponent,
    BtnComponent,
    HelloDirective,
    Page1Component,
    Page2Component,
    MydirDirective,
    SignupComponent,
    StudentComponent
  ],
  imports: [ // modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ // interceptors
    {
      provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
