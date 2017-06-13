import {Component,Input} from '@angular/core'
import {UserService} from '../../shared/user.service'
import {ActivatedRoute} from '@angular/router'

@Component({
    selector:'user-thumbnail',
    templateUrl:'./user-thumbnail.component.html'
})
export class UserThumbnailComponent{
    @Input() user:any 
}