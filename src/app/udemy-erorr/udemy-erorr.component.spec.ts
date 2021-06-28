import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdemyErorrComponent } from './udemy-erorr.component';

describe('UdemyErorrComponent', () => {
  let component: UdemyErorrComponent;
  let fixture: ComponentFixture<UdemyErorrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdemyErorrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdemyErorrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
