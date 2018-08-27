import {Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

import { HeaderService } from './header.service';
import { NavBar, MenuItem } from './header';

@Component({
    selector:'header',
     //templateUrl:'./src/app/Layout/Header/header.component.html',
     //styleUrls:['./src/app/Layout/Header/header.component.css']
         templateUrl:'header.component.html',
    // styleUrls:['header.component.css']
})
export class HeaderComponent implements OnInit{
    // navigationItems: NavigationItem[] = [];
    test: NavBar;
    menu: MenuItem[];
    isOpen: boolean;

    constructor(
        private headerService: HeaderService,
        private changeDetectorRef: ChangeDetectorRef,
        private router: Router
    ){}

    
    ngOnInit(){
               
        this.headerService.populateMenu();
        this.test = this.headerService.testNav;
        this.test.navItems = this.headerService.navItems;
        this.menu = this.headerService.testNav.navItems;

        window.onresize = () => { 
            this.headerService.populateMenu();
            this.test.navItems = this.headerService.navItems;
            //this.menu = this.headerService.testNav.navItems;
            this.changeDetectorRef.markForCheck();
            this.changeDetectorRef.detectChanges();
        };
    }

    toggleDrawer(){
        //window.alert('xxx');
        this.isOpen = !this.isOpen;
    }

    navTo(url: string){
        this.isOpen = false;
        this.router.navigate([url]);
    }
}


// class NavigationItem{
//     name:string;
//     url: string;
// }