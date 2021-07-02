import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit,ChangeDetectionStrategy,ViewEncapsulation} from '@angular/core';

import { HomeService } from '../services/home.service';
import{Course} from '../models/Course';
import{Topic} from '../models/Topic';

import { ActivatedRoute } from '@angular/router';
import { Category } from '../models/Category';
import { CourseService } from './../services/course.service';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {

  Categories=[];
  categories:Category[]=[];
  categ:Category[]=[]
  courses:Course[] =[];
  topic:Topic[]=[];
  TopCateg:Category[]=[];


  constructor(private homeServices:HomeService , public activeRout:ActivatedRoute,
    private courseService:CourseService) {}

GetTopRelateCourse(id:number){
this.activeRout.params.subscribe(
  a=>{
    this.homeServices.getCourseRelatToTopic(id).subscribe(
      b=>{
        console.log("Success RelateByCourse",b);
        this.courses=b;
      },
      err=>{
        this.courses=[];
        console.log("error of Relate Course",err)
      }
    )
  }
)
}

  ngOnInit(): void {


        this.homeServices.getAllCategruery().subscribe(
          a=>{
            console.log("success Categerory");
            // this.categ=a;
            
          },
          err=>{
            console.log("error"+ err);
          }
        )


    this.homeServices.getAllTopic().subscribe(
      a=>{

        this.topic=a;
        console.log(a);
        console.log("success Topic");
      },
      err=>{
        console.log("error Topic"+ err);
      }
    )


// Get All Courses
this.courseService.GetAllCourses().subscribe(
  a=>{
   console.log("success Categerory");
   this.courses=a;
   
 },
 err=>{
   console.log("error"+ err);
 }
)

// Get Top Categories
this.homeServices.getTopCategories().subscribe(
  (a:any)=>{
this.categories=a;
this.categ=a;
    this.TopCateg=a;
    console.log(a);
    console.log("success category");
 
  },
  err=>{
    console.log("error category"+ err);
  }
)



  }

  items = Array.from({length: 30}).map((_, i) => `Item #${i}`);

}
