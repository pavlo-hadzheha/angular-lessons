import { NgModule } from '@angular/core';
import { FormsModule, NG_VALIDATORS } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CensorAppComponent } from './censor-app/censor-app.component';
import { UserListComponent } from './user-list/user-list.component';
import { CorrectFormatValidator } from "./user-list/directives/correct-format.directive";
import { ButtonScrollUpComponent } from './button-scroll-up/button-scroll-up.component';
import { TaskListComponent } from './task-list/task-list.component';
import { PhoneBookComponent } from './phone-book/phone-book.component';
import { SearchPipe } from './share/pipes/search.pipe';
import { SortPipe } from './share/pipes/sort.pipe';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';

@NgModule({
  declarations: [
    AppComponent,
    CensorAppComponent,
    UserListComponent,
    CorrectFormatValidator,
    ButtonScrollUpComponent,
    TaskListComponent,
    PhoneBookComponent,
    SearchPipe,
    SortPipe,
    HomeComponent,
    WorksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
