import {Component,Input} from '@angular/core'
import {UserService} from '../../shared/user.service'
import {ActivatedRoute} from '@angular/router'

@Component({
    selector:'user-detail',
    templateUrl:'./user-detail.component.html'
})
export class UserDetailComponent{
    user:any
    constructor(private route:ActivatedRoute,private service:UserService){

}

ngOnInit(){
let id = +this.route.snapshot.params['id']
this.user= this.service.getUser(id)
}

}