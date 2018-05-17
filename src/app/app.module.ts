import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent }  from './app.component';
//import { ProgressBar } from './progress-bar.component';
import { ButtonComponent } from './common/component/button/button.component';
import { LayoutComponent } from './Layout/layout.component';
import { HeaderComponent } from './Layout/Header/header.component';
import { ResumeComponent } from './Resume/resume.component';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [
     AppComponent, 
     //ProgressBar, 
     ButtonComponent, 
     LayoutComponent,
     HeaderComponent,
     ResumeComponent
     ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
 