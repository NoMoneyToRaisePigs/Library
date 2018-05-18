import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { LibraryRoutingModule } from './library-routing.module'
import { ButtonComponent } from '../common/component/button/button.component';

@NgModule({
    imports:[CommonModule, LibraryRoutingModule],
    declarations:[ButtonComponent],
    bootstrap: [ButtonComponent]
})

export class LibraryModule{}