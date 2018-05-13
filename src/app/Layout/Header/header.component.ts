import {Component, OnInit} from '@angular/core';

@Component({
    selector:'header',
    templateUrl:'./src/app/Layout/Header/header.component.html',
    styleUrls:['./src/app/Layout/Header/header.component.css']
})
export class HeaderComponent implements OnInit{
    navigationItems: NavigationItem[] = [];

    constructor(){}

    ngOnInit(){
        this.navigationItems.push(<NavigationItem>{name:'Library'});
        this.navigationItems.push(<NavigationItem>{name:'Resume'});
    }
}

class NavigationItem{
    name:string;

}