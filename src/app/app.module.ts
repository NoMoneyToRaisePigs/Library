import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {ProgressBar} from './progress-bar.component';
import { ButtonComponent } from './common/component/button/button.component';
import { LayoutComponent } from './Layout/layout.component';
import { HeaderComponent } from './Layout/Header/header.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
     AppComponent, 
     ProgressBar, 
     ButtonComponent, 
     LayoutComponent,
     HeaderComponent
     ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
 