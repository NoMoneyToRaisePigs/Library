import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { GFComponentModule } from '../common/component/gf-component.module';
//import { GFServiceModule } from '../common/service/gf-service.module';

import { HomeComponent } from './home.component';
import { HomeApp } from './home-app.component';

const homeRoutes: Routes = [
    { path: '', component: HomeApp, children:[
           {path: '', component: HomeComponent}
        ]
    }
];

@NgModule({
    imports:[
        CommonModule, 
        GFComponentModule, 
        //GFServiceModule, 
        RouterModule.forChild(homeRoutes)
        ],
    declarations:[HomeComponent, HomeApp]
})

export class HomeModule{}