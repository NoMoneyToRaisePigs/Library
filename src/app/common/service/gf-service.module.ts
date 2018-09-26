import { NgModule } from '@angular/core';

import { IconService } from './icon.service';
import { SideBarService } from './side-bar.service';
import { WindowService } from './window.service';

@NgModule({
    providers:[IconService, SideBarService, WindowService]
})
export class GFServiceModule{}