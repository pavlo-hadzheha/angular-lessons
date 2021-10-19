import { Component, OnInit } from '@angular/core';
import { IBlogResponse } from 'src/app/share/interfaces/angular-blog/blog.interface';
import { BlogsService } from 'src/app/share/services/blog-app/blogs.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public blogs!: Array<IBlogResponse>;

  constructor(
    private blogService: BlogsService
  ) { }

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs() {
    this.blogService.getAll().subscribe(data => {
      this.blogs = data;
    })
  }

}
