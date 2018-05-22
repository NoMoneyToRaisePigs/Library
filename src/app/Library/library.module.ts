import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

import { LibraryComponent } from './library.component';

const libraryRoutes: Routes = [
    {path:'', component: LibraryComponent}
];

@NgModule({
    imports:[CommonModule, RouterModule.forChild(libraryRoutes)],
    declarations:[LibraryComponent]
})

export class LibraryModule{}