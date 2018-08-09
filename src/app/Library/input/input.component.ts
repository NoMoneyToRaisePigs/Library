import {Component} from '@angular/core'

@Component({
    selector:'gf-input',
     templateUrl:'./src/app/Library/input/input.component.html',
     //styleUrls:['./src/app/Library/input/input.component.css']
     //   templateUrl:'input.component.html',
   // styleUrls:['input.component.css']
})
export class InputComponent{
    value: string = '';
    error: string = 'error message here';
    
    getClass(){
        return this.value ? 'filled' : '';
    }
}