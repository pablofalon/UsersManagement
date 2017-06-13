import {Injectable} from '@angular/core'

@Injectable()
export class UserService{
    getUsers(){
        return USERS; 
    }

    getUser(id:number){
        return USERS.find(u=>u.id===id)
    }

   
}

 const USERS=[{
        id:1,
        name:"pablo"
    },
    {
        id:2,
        name:"usuario2"
    }]