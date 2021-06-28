import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { observable } from 'rxjs';
import { Course } from '../models/Course';
import { CourseLecture } from '../models/course-lecture';
import { CourseSections } from '../models/course-sections';
import { Instructor } from '../models/Instructor';
import { CourseService } from '../services/course.service';
import { InstructorService } from '../services/instructor.service';

@Component({
  selector: 'app-upload-course',
  templateUrl: './upload-course.component.html',
  styleUrls: ['./upload-course.component.css']
})
export class UploadCourseComponent implements OnInit {

  insId = localStorage.getItem('LoginedId');

  course !: Course;
  //instructor!:Instructor;

  newsection: CourseSections = new CourseSections(0, '', 0);
  newlecture: CourseLecture = new CourseLecture(0, '', '', 0, '', 0);

  crsSections !: CourseSections[];
  crsLectures!: CourseLecture[];



  constructor(private courseService: CourseService,
    private instructorService: InstructorService,
    public ar: ActivatedRoute,
    public router: RouterModule
  ) { }



  imgSubmitted = false;
  isAlert: boolean = false;
  isProgress:boolean = false;
  isError:boolean = false

  myForm: FormGroup = new FormGroup({
    file: new FormControl('', [Validators.required])
  });


  //  on select image set image url 
  url: string = "https://youtu.be/QPaI8xVWBjY";

  onSelectVideo(e: any) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result; 
      }

    }
  }

  // img form submit button
  submitVideo(files: any, lectureId: number) {

    this.imgSubmitted = true;
    if (this.myForm.invalid) {
      return;
    }
  
    let Video = <File>files[0];
    const formData = new FormData();
    formData.append('file', Video, Video.name);

    this.isError = false;
    this.isProgress=true;
    
    this.courseService.UploadLectureVideo(lectureId,formData).subscribe(
      obj=>{
        this.isProgress=false;
        this.isAlert=true;
        this.crsLectures = obj;
        console.log("Upload Video",obj)
 
    },err=>{
      this.isProgress=false;
      this.isError = true;
      console.log("Upload Video error ",err);
    });


  }

  get f() {
    return this.myForm.controls;
  }


  ngOnInit(): void {

    console.log("Local Storage Id", this.insId);

    let id = 0;
    this.ar.params.subscribe(
      a => {
        id = a['id'];
      }
    );

    this.courseService.GetCourseById(id).subscribe(
      d => {
        this.course = d;
        console.log("course", d);
      },
      err => {
        console.log("get course Error", err);
      }
    );

    this.courseService.GetCourseSections(id).subscribe(
      d => {
        this.crsSections = d;
        console.log("GetCourseSections Data ", this.crsSections);
      },
      err => {
        console.log("GetCourseSections Error", err);
      }
    );


    this.courseService.GetCourseLectures(id).subscribe(
      d => {
        this.crsLectures = d;
        console.log("GetCourseLectures Data ", this.crsLectures);
      },
      err => {
        console.log("GetCourseLectures Error", err);
      }
    );


  }

  addSection(crsId: number) {
    this.courseService.AddCourseSection(crsId, this.newsection).subscribe(
      data => {
        this.crsSections = data;
        console.log("addSection Done", data);

      },
      err => {
        console.log("addSection Error", err)
      }
    );
  }

  addLecture(sectionId: number) {
    this.courseService.AddSectionLecture(sectionId, this.newlecture).subscribe(
      data => {
        this.crsLectures = data;
        console.log("addLecture Done", data);
      },
      err => {
        console.log("addSection Error", err)
      }
    );
  }


  deleteSection(sectionId: number) {
    this.courseService.DeleteCourseSection(this.course.crsId, sectionId).subscribe(
      data => {
        this.crsSections = data;
        console.log("delete Section", this.crsSections);
      },
      err => {
        console.log("delete Section Error", err);
      }
    );
  }

  deleteLecture(lecId: number) {
    this.courseService.DeleteSectionLectures(this.course.crsId, lecId).subscribe(
      data => {
        this.crsLectures = data;
        console.log("delete lecture", this.crsLectures);
      },
      err => {
        console.log("delete lecture Error", err);
      }
    );
  }
}
