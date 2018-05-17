import { Component, Input } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl : './src/app/progress-bar.component.html'
})
export class ProgressBar{
    @Input() progresPpercentage : string;

    constructor()
    {
      //this.progresPpercentage = "50%";
    }
}