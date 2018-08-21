import {Component, OnInit} from '@angular/core';

@Component({
    selector:'resume',
    templateUrl:'resume.component.html'
})
export class ResumeComponent implements OnInit{

    constructor(){}

    ngOnInit(){
    }

    testmethod(ele: HTMLElement){
        window.alert('haha');
        
    }
}

