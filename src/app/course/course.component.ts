import { Component, OnInit, ViewChild } from '@angular/core';
import { Category, SubCateg } from '../models/Category';
import { Course } from '../models/Course'
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../services/Category.service'
import { Instructor } from '../models/Instructor';
import { InstructorService } from '../services/instructor.service';
import { MatAccordion } from '@angular/material/expansion';
import { Section } from '../models/Section';
import { lecture } from '../models/lecture';
import { Topic } from '../models/Topic';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
import { StudentService } from '../services/student.service';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private loginService: LoginService,
    private categoryService: CategoryService,
    private InstructorService: InstructorService,
    private studentService: StudentService,
    public ar: ActivatedRoute) {

  }

  course!: Course;
  sections: Section[] = [];
  lectures: lecture[] = [];
  step = 0;

  enrolled: boolean = false;
  alert: boolean = false;

  list: number[] = [1, 2, 3, 5];

  login: boolean = false; // return observable
  isLoggedIn: Boolean | undefined;
  loginId!: number;
  role: string | null | undefined;


  //  get  Lectures by section Id
  AddLecture(_id: number) {
    console.log(_id);
    this.ar.params.subscribe(
      a => {
        console.log(a['_id']);
        this.categoryService.getAllLecturesBySectionId(_id).subscribe(
          d => {
            console.log(d);
            this.lectures = d;
          }
        )
      }
    )
  }


  Enroll(t: any) {
    this.studentService.AddEnroll(this.course?.crsId, this.loginId).subscribe(
      d => {
        this.course = d;
        t.disabled = true;
        this.alert = true;
        console.log("enrolled", this.course.studentCourses.length);
      }, err => {
      console.log("error enrolled");
    }
    )
  }

  ngOnInit(): void {

    this.GetRole();

    let id = 0;
    this.ar.params.subscribe(
      a => {
        id = a['crsId'];
      }
    );


    this.categoryService.getcourseBycourseId(id).subscribe(
      (d) => {
        this.course = d;
        console.log("My Course", this.course);


        this.loginService.isLoggedIn.subscribe((d: any) => {
          this.login = d;//boolean
          console.log("is login :", this.login);
          this.loginId = Number(localStorage.getItem('LoginedId'));
          
          this.GetEnrolled();
        });



      }
    )

    //  get All Sections

    this.categoryService.getAllsectionsByCourseId(id).subscribe(
      (d) => {
        this.sections = d;
      }
    )



  }

  GetRole() {
    this.role = this.loginService.getRole()
    console.log("My Role", this.role);
    return this.role;
  }

  GetEnrolled() {
    for (var i = 0; i < this.course.studentCourses.length; i++) {
      if (this.course.studentCourses[i].stdId == this.loginId) {
        this.enrolled = true;
        console.log("found******");
        return;
      }
    }
  }


  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;

}