import {Component,Input} from '@angular/core';

@Component({
    selector:'navbar-custom',
    templateUrl:'../common/navbar.component.html'
})
export class NavbarComponent{
   @Input() loggedUser:any
}