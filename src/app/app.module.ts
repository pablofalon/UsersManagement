import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar.component';
import { UserListComponent } from './users/user-list.component';

const appRoutes: Routes = [
  { path: 'users', component: UserListComponent },
   { path: '' ,redirectTo: '/users',pathMatch: 'full'
  },
 
];



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserListComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
