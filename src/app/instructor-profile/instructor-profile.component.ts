import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../models/Course';
import { Instructor } from '../models/Instructor';
import { InstructorService } from '../services/instructor.service';

@Component({
  selector: 'app-instructor-profile',
  templateUrl: './instructor-profile.component.html',
  styleUrls: ['./instructor-profile.component.css']
})
export class InstructorProfileComponent implements OnInit {

  instructor !: Instructor;
  courses !: Course[];
  myImgUrl:string='https://img.icons8.com/ios/452/personal-trainer.png';
  CourseImgUrl:string = 'https://training.risk.net/sites/default/files/styles/landscape_medium/public/2018-06/Course%20Highlights%20EB8%20Image%20White%20background.png?itok=XN4_cn7D';
  count!:number;
 

  constructor(private instructorService: InstructorService, public ar: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    let id = 0;
    this.ar.params.subscribe(
      a => {
        id = a['id'];
      }
    );

    this.instructorService.GetStudnetNumbersWithInstructor(id).subscribe(
       c => 
       {
        this.count = c;
        console.log("Number Of Students",this.count);
       },
       err => {
        this.count =0;
        console.log('error',err); 
       }
    );

    this.instructorService.GetInstructor(id).subscribe(
      d => {
        this.instructor = d;
        console.log("instructor",d);
      }
    );

    this.instructorService.GetInstructorCourses(id).subscribe(
      b => {
        this.courses = b;
        console.log(b);

      }
    );
  }


}