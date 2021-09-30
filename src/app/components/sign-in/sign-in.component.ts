import { ThrowStmt } from '@angular/compiler';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUserResponse } from 'src/app/share/interfaces/angular-blog/user.interface';
import { UsersService } from 'src/app/share/services/blog-app/users.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  @ViewChild('open') open!: ElementRef;
  @ViewChild('close') close!: ElementRef;

  public signInForm!: FormGroup;
  public currentUser!: IUserResponse;
  private isLoggedIn = false;

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.initSignInForm();
  }

  ngAfterViewInit(): void {
    this.open.nativeElement.click();
    this.open.nativeElement.remove();
  }

  initSignInForm() {
    this.signInForm = this.fb.group({
      login: [null, Validators.required],
      password: [null, Validators.required],
    })
  }

  public isLoogedIn(): boolean {
    return this.isLoggedIn;
  }

  signIn(): void {
    this.usersService.getAll().subscribe(data => {
      let exists = false;
      data.concat([]).forEach((elem,i,arr) => {
         if(( this.signInForm.value.login === elem.email 
          || this.signInForm.value.login === elem.username )
          && this.signInForm.value.password === elem.password) {
            exists = true;
            this.currentUser = elem;
            arr.splice(i);
          }
      });
        console.log('here');
      if(exists) {
        
        this.usersService.isLoggedIn(true);
        this.usersService.setCurrentUser(this.currentUser);
        this.closeModal();
      } else {
        alert('Wrong login or password')
      }
    })
  }

  private openModal(): void {
    this.open.nativeElement.click();
  }

  private closeModal(): void {
    this.navigateTo('..');
    this.close.nativeElement.click();
  }

  private navigateTo(path?: string) {
    this.router.navigate([path ?? '..']);
  }

}
