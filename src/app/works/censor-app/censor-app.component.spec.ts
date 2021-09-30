import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CensorAppComponent } from './censor-app.component';

describe('CensorAppComponent', () => {
  let component: CensorAppComponent;
  let fixture: ComponentFixture<CensorAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CensorAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CensorAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
