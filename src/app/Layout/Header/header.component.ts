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
        this.navigationItems.push(<NavigationItem>{name:'Library', url: '//library'});
        this.navigationItems.push(<NavigationItem>{name:'Resume', url: '//resume'});
    }
}

class NavigationItem{
    name:string;
    url: string;
}