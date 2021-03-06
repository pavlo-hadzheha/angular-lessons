import { Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { UsersService } from "src/app/share/services/blog-app/users.service";
import { BlogsService } from 'src/app/share/services/blog-app/blogs.service';
import { IUserResponse } from "src/app/share/interfaces/angular-blog/user.interface";
import { IBlogRequest, IBlogResponse } from "src/app/share/interfaces/angular-blog/blog.interface";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-angular-blog',
  templateUrl: './angular-blog.component.html',
  styleUrls: ['./angular-blog.component.scss']
})
export class AngularBlogComponent implements OnInit {

  @ViewChild('close') close!: ElementRef;

  public blogs!: Array<IBlogResponse>;
  public postForm!: FormGroup;
  public isEdit = false;
  public edited!: IBlogResponse;
  public editedID!: number;

  constructor(
    private usersService: UsersService,
    private blogService: BlogsService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.initPostForm();
    this.getBlogs();
  }

  /**
   * initPostForm
   */
  public initPostForm() {
    this.postForm = this.fb.group({
      title: ['New Post', [Validators.required, Validators.maxLength(60)]],
      content: ['Here we are talking about ...', Validators.required],
    })
  }

  /**
   * addPost
   */
  public addBlog(): void {
    let post: IBlogRequest = {
      ... this.postForm.value,
      date: new Date().getTime(),
      postedBy: this.currUser().username,
    };
    this.blogService.create(post).subscribe(() => {
      this.close.nativeElement.click();
      this.getBlogs();
    })
  }

  /**
   * deleteBlog
   */
  public deleteBlog(id: number): void {
    this.blogService.delete(id).subscribe(() => {
      console.log('Successfully deleted');
      this.getBlogs();
    }, err => {
      console.log(err);
    })
  }

  /**
   * editBlog
   */
  public editBlog(id: number): void {
    this.blogService.getOne(id).subscribe(data => {
      this.edited = data;
      this.editedID = data.id;
      this.postForm.patchValue({
        title: this.edited.title,
        content: this.edited.content
      });
      this.isEdit = true;
    }, err => {
      console.log(err);
    });
  }

  public saveChanges() {
    let post: IBlogResponse = {
      ... this.postForm.value,
      date: new Date().getTime(),
      postedBy: this.edited.postedBy,
      editedBy: this.currUser().username,
    }
    this.blogService.update(post, this.editedID).subscribe(() => {
      console.log('Successfully updated');
      this.close.nativeElement.click();
      this.getBlogs();
    }, err => {
      console.log(err);
    })
  }

  /**
   * getBlog
   */
  public getBlog(id: number): void {
  }

  /**
   * getBlogs
   */
  public getBlogs(): void {
    this.blogService.getAll().subscribe(data => {
      this.blogs = data;
    }, err => {
      console.log(err);
    });
  }

  /**
   * isLoggedIn
   */
  public isLoggedIn(): boolean {
    return this.usersService.isLoggedIn();
  }

  public currUser() {
    return this.usersService.getCurrentUser();
  }

  /**
   * signOut
   */
  public signOut(): void {
    this.usersService.isLoggedIn(false);
  }

  /**
   * checkPermission
   */
  public checkPermission(blog: IBlogResponse): boolean {
    return this.isLoggedIn()
      && (this.currUser().username === 'admin'
        || this.currUser().username === blog.postedBy);
  }

}