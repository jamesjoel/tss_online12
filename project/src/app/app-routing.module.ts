import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { BashboardComponent } from './pages/bashboard/bashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { AboutComponent } from './pages/about/about.component';


const routes: Routes = [
  {
    path : "",
    component : HomeComponent
  },
  {
    path : "login",
    component : LoginComponent
  },
  {
    path : "about",
    component : AboutComponent
  },
  {
    path :"dashboard",
    component : BashboardComponent,
    canActivate : [AuthGuard]
  },
  {
    path : "profile",
    component : ProfileComponent,
    canActivate : [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/*
HTTP Headers

Client -----------------> Server
1. <form> -- get, post, file
2. URL -- get
3. HTTP Methods --- get, post, put, delete (AJAX, Angular)

4. HTTP Headers









*/