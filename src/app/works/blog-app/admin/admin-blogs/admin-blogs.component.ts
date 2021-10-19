import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IBlogRequest, IBlogResponse } from 'src/app/share/interfaces/angular-blog/blog.interface';
import { BlogsService } from 'src/app/share/services/blog-app/blogs.service';

@Component({
  selector: 'app-admin-blogs',
  templateUrl: './admin-blogs.component.html',
  styleUrls: ['./admin-blogs.component.scss']
})
export class AdminBlogsComponent implements OnInit {


  public blogs!: IBlogResponse[];
  public blogForm!: FormGroup;
  public editMode = false;
  public editedID!: number;

  constructor(
    private blogService: BlogsService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initBlogForm();
    this.getBlogs();
  }

  public initBlogForm(): void {
    this.blogForm = this.fb.group({
      title: [null, Validators.required],
      content: [null, Validators.required],
      postedBy: [null, Validators.required]
    })
  }

  public getBlogs(): void {
    this.blogService.getAll().subscribe(data => {
      this.blogs = data;
    });
  }

  /**
   * addBlog
   */
  public addBlog() {
    let blog = {
      ... this.blogForm.value,
      date: new Date().valueOf(),
    }
    if (this.editMode) {
      this.blogService.update(blog, this.editedID).subscribe(() => {
        console.log('Changes saved successfully');
        this.editMode = false;
        this.initBlogForm();
        this.getBlogs();
      })
    } else {
      this.blogService.create(blog).subscribe(() => {
        console.log('Blog added successfully');
        this.initBlogForm();
        this.getBlogs();
      });
    }
  }

  /**
   * deleteBlog
   */
  public deleteBlog(id: number): void {
    this.blogService.delete(id).subscribe(() => {
      this.getBlogs();
      console.log('Blog deleted successfully');
    });
  }

  /**
   * editBlog
   */
  public editBlog(id: number): void {
    this.blogService.getOne(id).subscribe(data => {
      this.editedID = id;
      this.editMode = true;
      this.blogForm.patchValue({
        title: data.title,
        content: data.content,
        postedBy: data.postedBy
      });
    })
  }

}
