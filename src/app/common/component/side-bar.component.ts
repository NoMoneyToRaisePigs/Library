import { Component, Input } from '@angular/core';
import { SideMenu } from '../service/interface';
import { WindowService } from '../service/window.service';

@Component({
    selector:'gf-side-bar',
    templateUrl:'side-bar.component.html',
})
export class SideBarComponent{
    @Input() menu: SideMenu[] = [];
    
    constructor(private windowService: WindowService){}
    
    expand(id: string){
        let select = this.menu.find(x => x.id == id);
        select.expanded = !select.expanded;
    }

    goto(id:string){
        this.windowService.scrollToElementId(id);
    }
}