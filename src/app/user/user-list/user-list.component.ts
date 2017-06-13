import {Component} from '@angular/core'
import{UserService} from 'app/shared/user.service'


@Component({
    templateUrl:'./user-list.component.html',
    selector:'users-list'
})

export class UserListComponent{

users: any;

   constructor(private userService: UserService){
       this.users=userService.getUsers();
   }
 
}