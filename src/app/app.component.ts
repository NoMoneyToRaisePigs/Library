import { Component, OnInit } from '@angular/core';
import { IconService } from './common/service/icon.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'my-app',
  //templateUrl:'./src/app/app.component.html',
  templateUrl:'app.component.html',
})
export class AppComponent implements OnInit{ 
    constructor(private iconService: IconService){}

    //constructor(){}

    ngOnInit(){
      let x : Observable<string> = Observable.of('xxx');

      // this.iconService.loadIconSet().map(()=>{
      //   return true;
      // }).subscribe(()=>{
      //   let x =0;
      // });
    }
}
 