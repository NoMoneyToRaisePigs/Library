import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GFComponentModule } from '../common/component/gf-component.module';

import { LibraryComponent } from './library.component';
import { InputComponent } from './input/input.component';
import { MenuComponent } from './menu/menu.component';

const libraryRoutes: Routes = [
    {path:'', component: LibraryComponent}
];

@NgModule({
    imports:[
        CommonModule, 
        FormsModule, 
        GFComponentModule, 
        RouterModule.forChild(libraryRoutes)],
    declarations:[
        LibraryComponent,
        InputComponent,
        MenuComponent
        ]
})

export class LibraryModule{}