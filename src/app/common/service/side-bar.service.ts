import { Injectable } from '@angular/core';
import { SideMenu, SubMenuItem } from './interface';

@Injectable()
export class SideBarService{
    getSideMenu(){
        let jsLibSub : SubMenuItem[] = [];
        jsLibSub.push(<SubMenuItem>{id:'1',name:'button'});
        jsLibSub.push(<SubMenuItem>{id:'2',name:'tooltip'});
        jsLibSub.push(<SubMenuItem>{id:'js-dropdown',name:'dropdown'});
        jsLibSub.push(<SubMenuItem>{id:'4',name:'datepicker'});
        jsLibSub.push(<SubMenuItem>{id:'5',name:'overlay'});
        jsLibSub.push(<SubMenuItem>{id:'6',name:'popup'});
        let cssLibSub : SubMenuItem[] = [];
        cssLibSub.push(<SubMenuItem>{id:'1',name:'flipping'});
        cssLibSub.push(<SubMenuItem>{id:'2',name:'gallery'});
        cssLibSub.push(<SubMenuItem>{id:'3',name:'image cutting'});
        cssLibSub.push(<SubMenuItem>{id:'4',name:'flipping'});
        cssLibSub.push(<SubMenuItem>{id:'5',name:'gallery'});
        cssLibSub.push(<SubMenuItem>{id:'6',name:'image cutting'});

        let menu : SideMenu[] = [];
        menu.push(<SideMenu>{id:'1', name:'JSLib', items: jsLibSub, expanded:false});
        menu.push(<SideMenu>{id:'2', name:'CSSLib', items: cssLibSub, expanded:false});

        return menu;
    }
}