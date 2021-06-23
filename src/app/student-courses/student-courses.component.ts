import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../models/Course';
import { Student } from '../models/Student';
import { CourseService } from '../services/course.service';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-courses',
  templateUrl: './student-courses.component.html',
  styleUrls: ['./student-courses.component.css']
})
export class StudentCoursesComponent implements OnInit {

  CourseImgUrl: string = 'https://training.risk.net/sites/default/files/styles/landscape_medium/public/2018-06/Course%20Highlights%20EB8%20Image%20White%20background.png?itok=XN4_cn7D';
  student!: Student;
  courses!: Course[];
  constructor(private studentService: StudentService, private courseService: CourseService, private ar: ActivatedRoute, private router: Router) { }

  deleteEnroll(id: number) {
    this.studentService.deleteEnroll(this.student.stdId, id).subscribe(
      d => {
        this.courses = d;
        console.log("Deleted", d);
        /*this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/topnav/StdCrs/', this.student.stdId]);
        });*/
      },
      err => {
        console.log("error", err);
      }
    );
  }


ngOnInit(): void {
  let id = 0;
  this.ar.params.subscribe(
    a => {
      id = a['id'];
    }
  );

  this.studentService.GetStudent(id).subscribe(
    d => {
      this.student = d
      console.log(this.student)
    }
    , err => {
      console.log(err);
    }
  );

  this.courseService.GetStudentCourses(id).subscribe(
    d => {
      this.courses = d
      console.log(this.courses)
    }
    , err => {
      console.log(err);
    }
  );

}

}
