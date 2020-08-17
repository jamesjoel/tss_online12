import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorRoutingModule } from './visitor-routing.module';
import { VisitorComponent } from './visitor.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';


@NgModule({
  declarations: [VisitorComponent, HeaderComponent, HomeComponent, AboutComponent, ContactComponent],
  imports: [
    CommonModule,
    VisitorRoutingModule
  ],
  bootstrap : [VisitorComponent]
})
export class VisitorModule { }
