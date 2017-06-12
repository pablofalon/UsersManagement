import {Injectable} from '@angular/core'

@Injectable()
export class UserService{
    getUsers(){
        return USERS;
    }

   
}

 const USERS=[{
        name:"pablo"
    },{
        name:"usuario2"
    }]