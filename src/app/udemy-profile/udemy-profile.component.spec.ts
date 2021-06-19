import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdemyProfileComponent } from './udemy-profile.component';

describe('UdemyProfileComponent', () => {
  let component: UdemyProfileComponent;
  let fixture: ComponentFixture<UdemyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdemyProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdemyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
