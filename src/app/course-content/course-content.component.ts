import { Component, ElementRef, OnInit, ViewChild, } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../models/Course';
import { CourseLecture } from '../models/course-lecture';
import { CourseSections } from '../models/course-sections';
import { CourseService } from '../services/course.service';



@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.css'],

})
export class CourseContentComponent implements OnInit {
  courseId = 1;
  isvisible = false;
  course!: Course;
  videoURL!:string;

  crsSections!: CourseSections[];
  secLecture!:CourseLecture[];
  lecture!:CourseLecture;
  
  constructor(private courseService: CourseService, public ar: ActivatedRoute, public router: RouterModule,private elRef: ElementRef) { }


  ngOnInit(): void {
    //Courses
    let id = 0;
    this.ar.params.subscribe(
      a => {
        id = a['id'];
      }
    );
    
    this.courseService.GetFirstLecture(id).subscribe(
       obj => 
       {
         this.videoURL = obj.link;
         console.log("Link",this.videoURL);
         this.elRef.nativeElement.querySelector('video').load();
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
      }
    );

  }

  shoechilds(SecId:number) {

    this.Lectures(SecId);
    this.isvisible = !this.isvisible;

  }

  ShowLecture(lect:number)
  {
   this.courseService.GetLectureById(lect).subscribe(
     obj =>
     {
       this.lecture = obj;
       console.log("Lecture:",obj);
       this.elRef.nativeElement.querySelector('video').load();
     }
   );
  }

Sections(crs:Course)
{
  this.courseService.GetAllSectionsByCrsId(crs.crsId).subscribe(
    sections => {
      this.crsSections = sections;
      console.log("Sections:", this.crsSections);
    }
  );
}

Lectures(sec:number)
{
  this.courseService.GetAllLecturesBySectionId(sec).subscribe(
    lectures => {
      this.secLecture = lectures;
      console.log("Lectures:", this.secLecture);
    }
  );
}

}
