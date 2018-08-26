import { Component, Input, ElementRef, Renderer, OnInit, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { IconService } from '../service/icon.service';

@Component({
   selector: 'gf-icon',
   template: '',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent implements OnInit, OnChanges {
    @Input() iconId: string;
    @Input() strokeColor: string;
   private isInitialized: boolean = false;
   private icon: SVGElement;

   constructor(
       private element: ElementRef,
       private renderer: Renderer,
       private iconService: IconService) {
   }

   ngOnInit() {
       if (this.isInitialized)
           return;

       this.initIcon();
       this.isInitialized = true;
   }

   ngOnChanges(changes: SimpleChanges) {
       if (this.isInitialized) {
           this.renderer.detachView([this.icon]);
           this.initIcon();
       }
   }

   private initIcon() {
        this.icon = <SVGElement>this.iconService.getIcon(this.iconId).cloneNode(true);
        if (this.strokeColor)
            this.icon.setAttribute("stroke", this.strokeColor);
        else
            this.icon.setAttribute("stroke", "currentColor");

       //this.renderer.projectNodes(this.element.nativeElement, [this.icon]);

       
       let div:HTMLElement = this.renderer.createElement(this.element.nativeElement,'div');
       div.classList.add('icon-container');
       div.appendChild(this.icon);       
   }
}