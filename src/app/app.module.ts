import { NgModule } from '@angular/core';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WorksComponent } from './works/works.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

import { CensorAppComponent } from './works/censor-app/censor-app.component';

import { UserListComponent } from './works/user-list/user-list.component';
import { CorrectFormatValidator } from "./works/user-list/directives/correct-format.directive";
import { ButtonScrollUpComponent } from './button-scroll-up/button-scroll-up.component';

import { TaskListComponent } from './works/task-list/task-list.component';

import { PhoneBookComponent } from './works/phone-book/phone-book.component';
import { SearchPipe } from './share/pipes/search.pipe';
import { SortPipe } from './share/pipes/sort.pipe';

import { BlogAppComponent } from './works/blog-app/blog-app.component';
import { BlogComponent } from './works/blog-app/blog/blog.component';
import { AdminBlogComponent } from "./works/blog-app/admin-blog/admin-blog.component";
import { AngularBlogComponent } from './works/angular-blog/angular-blog.component';

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
    WorksComponent,
    BlogAppComponent,
    BlogComponent,
    AdminBlogComponent,
    AngularBlogComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
