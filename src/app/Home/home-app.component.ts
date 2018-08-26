import { Component, OnInit } from '@angular/core';
//import { IconService } from '../common/service/icon.service';

@Component({
    selector:'home-app',
    template:'<router-outlet></router-outlet>'
})
export class HomeApp implements OnInit{
    //constructor(private iconService: IconService){}
    

    constructor(){}

    ngOnInit(){
        //this.iconService.loadIconSet();
    }
}