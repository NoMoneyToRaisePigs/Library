import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { LibraryComponent } from './library.component';

const routes: Routes = [
        {path:'src', component: LibraryComponent},
    {path:'src/resume', component: LibraryComponent},
    {path:'resume', component: LibraryComponent},
    {path:'', component: LibraryComponent}
];

@NgModule({
    imports:[ RouterModule.forChild(routes)],
    exports:[ LibraryRoutingModule ]
})

export class LibraryRoutingModule{}