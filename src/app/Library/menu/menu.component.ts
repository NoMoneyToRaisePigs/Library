import {Component} from '@angular/core';

@Component({
    selector:'side-menu',
    templateUrl:'./src/app/Library/menu/menu.component.html',
    // styleUrls:['./src/app/Library/menu/menu.component.css'],
    //templateUrl:'menu.component.html',
    //styleUrls:['menu.component.css']
})
export class MenuComponent{
    sideMenuItems: SideMenuItem[] = [];

    constructor(){
        this.sideMenuItems.push({id:'input',name:'input'});
    }


}

interface SideMenuItem{
    id: string;
    name: string;
}