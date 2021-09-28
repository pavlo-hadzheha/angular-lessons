import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-scroll-up',
  templateUrl: './button-scroll-up.component.html',
  styleUrls: ['./button-scroll-up.component.scss']
})
export class ButtonScrollUpComponent implements OnInit {
  public scrolled = false;

  ngOnInit(): void { }

  onScroll(event: Event): void {
    console.log(this.scrolled);
    this.scrolled = window.scrollY < 100 ? false : true;
  }
  onClick(): void {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}