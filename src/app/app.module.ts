import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent }  from './app.component';
//import { HomeComponent } from './Home/home.component';

import { HeaderComponent } from './Layout/Header/header.component';
import { LayoutComponent } from './Layout/layout.component';

import { HeaderService } from './Layout/Header/header.service';

@NgModule({
  imports: [ BrowserModule, AppRoutingModule ],
  providers:[ HeaderService ],
  declarations: [
     AppComponent, 
     //HomeComponent,
     HeaderComponent,
     LayoutComponent
     ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
 