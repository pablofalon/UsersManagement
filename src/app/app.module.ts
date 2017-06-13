import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserThumbnailComponent } from './user/user-thumbnail/user-thumbnail.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';

import {UserService} from './shared/user.service'

const appRoutes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'user/:id', component: UserDetailComponent },
  { path: '' ,redirectTo: '/users',pathMatch: 'full'} 
];



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserListComponent,
    UserDetailComponent,
    UserThumbnailComponent
    
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
