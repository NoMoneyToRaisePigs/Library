import {Component, OnInit} from '@angular/core';
import { SideBarService } from '../common/service/side-bar.service';
import { SideMenu } from '../common/service/interface';

@Component({
    selector:'library',
    // templateUrl:'./src/app/Library/library.component.html',
    // styleUrls:['./src/app/Library/library.component.css']
        templateUrl:'library.component.html',
    //styleUrls:['library.component.css']  // this is trying for Angular-cli Aot
})
export class LibraryComponent implements OnInit{
    menu: SideMenu[];

    constructor(private sideBarService: SideBarService){

    }

    ngOnInit(){
        this.menu = this.sideBarService.getSideMenu();
    }
}

