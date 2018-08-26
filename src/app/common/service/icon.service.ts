import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/RX';

@Injectable()
export class IconService{
    private iconSet: { [id: string]: SVGElement } = {};

    constructor(
        private http: Http){}
    
    getIcon(iconId: string): SVGElement{
        return this.iconSet[iconId];
    }

    loadIconSet(): Observable<any>{
        return this.http.get('/resource/icon.svg').map(response =>{
            this.extractSvgsFromText(response.text());
        });
    }

    private extractSvgsFromText(svgText: string) {
       const div = document.createElement('DIV');
       div.innerHTML = svgText;

       const svg = <SVGElement>div.querySelector('svg');
       const defs = <Element>svg.querySelector('defs');
       const svgs = <NodeListOf<SVGElement>>defs.querySelectorAll('svg');

       for (let i = 0; i < svgs.length; i++) {
           let icon = svgs.item(i);
           let iconElement = <SVGElement>icon;
           iconElement.setAttribute('focusable', 'false');
           iconElement.setAttribute('role', 'presentation');
           this.iconSet[icon.id] = <SVGElement>icon;
       }
   } 
}