import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CensorAppComponent } from './works/censor-app/censor-app.component';
import { UserListComponent } from './works/user-list/user-list.component';
import { TaskListComponent } from './works/task-list/task-list.component';
import { PhoneBookComponent } from './works/phone-book/phone-book.component';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';

// import { BlogAppComponent } from "./works/blog-app/blog-app.component";

import { AngularBlogComponent } from "./works/angular-blog/angular-blog.component";
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AdminComponent } from './works/blog-app/admin/admin.component';
// import { AdminBlogsComponent } from './works/blog-app/admin/admin-blogs/admin-blogs.component';
// import { BlogComponent } from './works/blog-app/blog/blog.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'works', component: WorksComponent, children: [
      { path: 'task-list', component: TaskListComponent },
      { path: 'user-list', component: UserListComponent },
      { path: 'phone-book', component: PhoneBookComponent },
      { path: 'censor-app', component: CensorAppComponent },

      {
        path: 'angular-blog', component: AngularBlogComponent, children: [
          { path: 'sign-in', component: SignInComponent },
          { path: 'sign-up', component: SignUpComponent },
        ]
      },

      // {
      //   path: 'blog-app', component: BlogAppComponent, children: [
      //     {
      //       path: 'admin', component: AdminComponent, children: [
      //         { path: 'blogs', component: AdminBlogsComponent },
      //         { path: '', pathMatch: 'full', redirectTo: 'blogs' }
      //       ]
      //     },
      //     { path: 'blogs', component: BlogComponent },
      //     { path: '', pathMatch: 'full', redirectTo: 'blogs' }
      //   ]
      // }
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
