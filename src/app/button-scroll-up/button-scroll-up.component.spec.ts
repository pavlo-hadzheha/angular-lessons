import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonScrollUpComponent } from './button-scroll-up.component';

describe('ButtonScrollUpComponent', () => {
  let component: ButtonScrollUpComponent;
  let fixture: ComponentFixture<ButtonScrollUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonScrollUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonScrollUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
