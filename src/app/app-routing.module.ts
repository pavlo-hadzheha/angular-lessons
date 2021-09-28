import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CensorAppComponent } from './censor-app/censor-app.component';
import { UserListComponent } from './user-list/user-list.component';
import { TaskListComponent } from './task-list/task-list.component';
import { PhoneBookComponent } from './phone-book/phone-book.component';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';

const routes: Routes = [
  { path: 'home', component:  HomeComponent },
  { path: 'works', component: WorksComponent, children: [
    {path: 'task-list', component: TaskListComponent },
    {path: 'user-list', component: UserListComponent },
    {path: 'phone-book', component: PhoneBookComponent },
    {path: 'censor-app', component: CensorAppComponent }
  ]},
  { path: '', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
