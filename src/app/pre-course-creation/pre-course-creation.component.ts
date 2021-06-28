import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/Course';
import { InstructorService } from '../services/instructor.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-pre-course-creation',
  templateUrl: './pre-course-creation.component.html',
  styleUrls: ['./pre-course-creation.component.css'],
})
export class PreCourseCreationComponent implements OnInit {
  constructor(
    public loginService: LoginService,
    private instrucrorService: InstructorService
  ) {}
  
  login: boolean = false; // return observable
  isLoggedIn: Observable<boolean> | undefined;
  courses: Course[] = [];

  ngOnInit(): void {
    this.loginService.isLoggedIn.subscribe((d: any) => {
      this.login = d;
      console.log(`is login :`, this.login);
      let loginId = Number(localStorage.getItem('LoginedId'));
      this.instrucrorService.GetInstructorCourses(loginId).subscribe((res) => {
        console.log(res);
        this.courses = res;
      });
    });
  }
}