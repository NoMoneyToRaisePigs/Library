import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

//import { GFComponentModule } from './common/component/gf-component.module';
import { GFServiceModule } from './common/service/gf-service.module';
import { GFComponentModule } from './common/component/gf-component.module';

import { AppComponent }  from './app.component';
import { LayoutComponent } from './Layout/layout.component';
import { HeaderComponent } from './Layout/Header/header.component';

import { HeaderService } from './Layout/Header/header.service';



@NgModule({
  imports: [ 
    BrowserModule, 
    AppRoutingModule,
    HttpModule,
    GFServiceModule,
    GFComponentModule
    ],
  providers:[ 
    HeaderService 
    ],
  declarations: [
     AppComponent, 
     LayoutComponent,
     HeaderComponent
     ],
  bootstrap:[ 
    AppComponent 
    ]
})
export class AppModule { }
 