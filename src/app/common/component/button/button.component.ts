import { Component,OnInit, Input, EventEmitter, Output, ElementRef } from '@angular/core';

let nextUniqueId = 0;

@Component({
    selector:'gf-button',
    templateUrl:'./src/app/common/component/button/button.component.html',
//     template:`
//     <button (click)="click()" [disabled]="disabled" [ngClass]="setClasses()" [id]="clientID" [tabIndex]="inputTabIndex">
//     <div class="button-content-container">{{text}}</div>
// </button>
//     `,
    //moduleId: module.id ,
    styleUrls:['./src/app/common/component/button/button.component.css'],
})
export class ButtonComponent{
    @Input() text : string;
    @Input() disabled : boolean;
    @Input() clientID: string;
    @Input() inputTabIndex: number;
   
    @Output() onClick: EventEmitter<any> = new EventEmitter();

    @Input() buttonType: 'Primary' | 'Secondary';

    constructor(private element: ElementRef) { }

    ngOnInit() {
        this.clientID = this.clientID || `darwin-button-${nextUniqueId++}`;
    }

    click() {
        this.onClick.emit(null);
    }

    setClasses() {
        return {
            'default': !this.buttonType,
            'primary': this.buttonType === 'Primary',
            'secondary': this.buttonType === 'Secondary',
            'is-disabled': this.disabled
        };
    }
}