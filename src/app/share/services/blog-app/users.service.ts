import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUserRequest, IUserResponse } from "../../interfaces/angular-blog/user.interface";


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = environment.BACKEND_URL;
  private api = { users: `${this.url}/users` };
  private _isLoggedIn = false;
  private currentUser!: IUserResponse;

  constructor(private http: HttpClient) { }

  /**
   * getAll
   */
  public getAll(): Observable<IUserResponse[]> {
    return this.http.get<IUserResponse[]>(this.api.users);
  }

  /**
   * getOne
   */
  public getOne(id: number) {
    return this.http.get<IUserResponse>(`${this.api.users}/${id}`);
  }

  /**
   * create
   */
  public create(user: IUserRequest): Observable<void> {
    return this.http.post<void>(this.api.users, user)
  }

  /**
   * update
   */
  public update(user: IUserRequest, id: number): Observable<void> {
    return this.http.patch<void>(this.api.users, user);
  }

  /**
   * delete
   */
  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api.users}/${id}`);
  }

  /**
   * isLoggedIn
   */
  public isLoggedIn(yes?: boolean): boolean {
    if(yes !== undefined) {
      this._isLoggedIn = yes;
    } 
    return this._isLoggedIn;
  }

  /**
   * setCurrentUser
   */
  public setCurrentUser(user: IUserResponse): void {
    this.currentUser = user;
  }

  /**
   * getCurrentUser
   */
  public getCurrentUser(): IUserResponse {
    return this.currentUser;
  }

}
