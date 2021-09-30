import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBlogRequest, IBlogResponse } from '../../interfaces/angular-blog/blog.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  private url = environment.BACKEND_URL;
  private api = { blogs: `${this.url}/blogs` };

  constructor(
    private http: HttpClient
  ) { }

  /**
   * getAll
   */
  public getAll(): Observable<IBlogResponse[]> {
    return this.http.get<IBlogResponse[]>(this.api.blogs);
  }

  /**
   * getOne
   */
  public getOne(id: number): Observable<IBlogResponse> {
    return this.http.get<IBlogResponse>(`${this.api.blogs}/${id}`);
  }

  /**
   * create
   */
  public create(blog: IBlogRequest): Observable<void> {
    return this.http.post<void>(this.api.blogs, blog);
  }

  /**
   * update
   */
  public update(post: IBlogResponse, id: number): Observable<void> {
    return this.http.patch<void>(`${this.api.blogs}/${id}`, post);
  }

  /**
   * delete
   */
  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api.blogs}/${id}`);
  }
}
