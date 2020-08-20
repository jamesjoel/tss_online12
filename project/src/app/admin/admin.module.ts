import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [AdminComponent, HeaderComponent, LoginComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  bootstrap : [ AdminComponent ]
})
export class AdminModule { }
