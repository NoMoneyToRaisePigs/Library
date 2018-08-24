import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeApp } from './home-app.component';

const homeRoutes: Routes = [
    { path: '', component: HomeApp, children:[
           {path: '', component: HomeComponent}
        ]
    }
];

@NgModule({
    imports:[CommonModule, RouterModule.forChild(homeRoutes)],
    declarations:[HomeComponent, HomeApp]
})

export class HomeModule{}