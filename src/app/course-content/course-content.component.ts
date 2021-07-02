import { Component, ElementRef, OnInit, ViewChild, } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../models/Course';
import { CourseLecture } from '../models/course-lecture';
import { CourseSections } from '../models/course-sections';
import { Student } from '../models/Student';
import { CourseService } from '../services/course.service';
import { LoginService } from '../services/login.service';
import { StudentService } from '../services/student.service';



@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.css'],

})
export class CourseContentComponent implements OnInit {
  courseId = 1;
  isvisible = false;
  course!: Course;
  videoURL!: string;
  student!: Student;
  res: boolean = false;
  Owner!: boolean;


  //enrolled: boolean = false;
  login: boolean = false; // return observable
  isLoggedIn: Boolean | undefined;
  loginId!: number;
  role: string | null | undefined;

  crsSections!: CourseSections[];
  secLecture!: CourseLecture[];
  lecture!: CourseLecture;

  constructor(private courseService: CourseService,
    public ar: ActivatedRoute,
    public router: Router,
    private elRef: ElementRef,
    private loginService: LoginService,
    private studentService: StudentService) { }


  ngOnInit(): void {

    //Courses
    let id = 0;
    this.ar.params.subscribe(
      a => {
        id = a['id'];
      }
    );


    this.courseService.GetCourseById(id).subscribe(
      obj => {
        this.course = obj;
        console.log('Course:', obj);
        //
        if (obj !== null) {
          this.Sections(obj);
        }

        this.loginService.isLoggedIn.subscribe((d: any) => {
          if (d == true) { // if loggedIn
            this.login = d;//boolean
            this.loginId = Number(localStorage.getItem('LoginedId'));
            console.log("logeedInId", this.loginId);
            if (this.GetRole()) {
              return;
            }
            else {
              this.router.navigate(['/topnav/course',this.course?.crsId]);
            }
          }
          else // if not loggedIn 
          {
            this.router.navigate(['/topnav/login']);
          }
        });

      }
    );

    /*  this.loginService.isLoggedIn.subscribe((d: any) => {
        if (d == true) { // if loggedIn
          this.login = d;//boolean
          this.loginId = Number(localStorage.getItem('LoginedId'));
          console.log("logeedInId",this.loginId);
          if (this.GetRole()) {
            return;
          }
          else {
            this.router.navigate(['/topnav/login']);
          }
        }
        else // if not loggedIn 
        {
          this.router.navigate(['/topnav/login']);
        }
      });*/


    this.courseService.GetFirstLecture(id).subscribe(
      obj => {
        this.videoURL = obj.link;
        console.log("Link", this.videoURL);
        this.elRef.nativeElement.querySelector('video').load();
      }
    );


  }

  shoechilds(SecId: number) {

    this.Lectures(SecId);
    this.isvisible = !this.isvisible;

  }

  ShowLecture(lect: number) {
    this.courseService.GetLectureById(lect).subscribe(
      obj => {
        this.lecture = obj;
        console.log("Lecture:", obj);
        this.elRef.nativeElement.querySelector('video').load();
      }
    );
  }

  Sections(crs: Course) {
    this.courseService.GetAllSectionsByCrsId(crs.crsId).subscribe(
      sections => {
        this.crsSections = sections;
        console.log("Sections:", this.crsSections);
      }
    );
  }

  Lectures(sec: number) {
    this.courseService.GetAllLecturesBySectionId(sec).subscribe(
      lectures => {
        this.secLecture = lectures;
        console.log("Lectures:", this.secLecture);
      }
    );
  }

  GetRole(): boolean {
    this.role = this.loginService.getRole()
    console.log(this.role);
    if (this.role == 'student') {
      return this.GetEnrolled();
    }
    else if (this.role == 'instructor') {
      return this.GetOwner();
    }
    return false;
  }

  GetEnrolled(): boolean { //Student
    /*this.studentService.GetStudent(this.loginId).subscribe(
     d =>
     {
      this.student =d;
      for (var i = 0; i < this.student.studentCourses.length; i++) {   
        console.log("StudentCourses Inside For",this.student.studentCourses.length);
        if (this.course.crsId == this.student.studentCourses[i].crsId) {
          console.log("found******");
          this.res = true;
          return this.res;
        }
     }
     return this.res;
    },err =>
    {
      console.log("error getting student",err);
    }
   );*/


    for (var i = 0; i < this.course?.studentCourses.length; i++) {
      console.log("StudentCourses Inside For", this.course.studentCourses.length);
      if (this.loginId == this.course.studentCourses[i].stdId) {
        console.log("found******");
        this.res = true;
      }
    }
    console.log("Result", this.res);
    return this.res;
  }

  GetOwner(): boolean { //instructor
    console.log("Inside Get Owner", this.course?.instructor.instId);
    if (this.course?.instructor.instId == this.loginId) {
      console.log("Owner******");
      this.Owner = true;
    }
    else {
      this.Owner = false;
    }
    console.log("Owner", this.Owner);
    return this.Owner;
  }

}
