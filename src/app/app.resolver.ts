import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs/Rx';

import { IconService } from './common/service/icon.service';

@Injectable()
export class AppResolver implements Resolve<boolean> {

    constructor(private iconService: IconService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
            return this.iconService.loadIconSet().map(() =>{
                return true;
            });   
            //return Observable.of(true);       
    }
}