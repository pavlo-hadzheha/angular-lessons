import { ThrowStmt } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUserRequest } from 'src/app/share/interfaces/angular-blog/user.interface';
import { UsersService } from 'src/app/share/services/blog-app/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  @ViewChild('open') open!: ElementRef;
  @ViewChild('close') close!: ElementRef;

  public signUpForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.initSignUpForm();
  }

  ngAfterViewInit(): void {
    this.openModal();
  }

  initSignUpForm() {
    this.signUpForm = this.fb.group({
      username: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  addUser(): void {
    this.userService.create({ ...this.signUpForm.value, isAdmin: false }).subscribe(() => {
      this.closeModal();
    })
  }

  private openModal(): void {
    this.open.nativeElement.click();
  }

  private closeModal(): void {
    this.route.navigate(['..']);
    this.close.nativeElement.click();
  }

}
