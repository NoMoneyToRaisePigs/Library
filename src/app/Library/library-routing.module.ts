import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { ButtonComponent } from '../common/component/button/button.component';

const routes: Routes = [
    {path:'libiary', component: ButtonComponent}
];

@NgModule({
    imports:[ RouterModule.forChild(routes)],
    exports:[ LibraryRoutingModule ]
})

export class LibraryRoutingModule{}