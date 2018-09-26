import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconComponent } from './icon.component';
import { SideBarComponent } from './side-bar.component';

@NgModule({
    imports:[ CommonModule ],
    declarations:[
        IconComponent,
        SideBarComponent],
    exports:[
        IconComponent,
        SideBarComponent]
})
export class GFComponentModule{}