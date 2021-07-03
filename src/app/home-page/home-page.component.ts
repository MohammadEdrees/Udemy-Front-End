import { Component, OnInit,ChangeDetectionStrategy,ViewEncapsulation} from '@angular/core';

import { HomeService } from '../services/home.service';
import{Course} from '../models/Course';
import{Topic} from '../models/Topic';

import { ActivatedRoute } from '@angular/router';
import { Category } from '../models/Category';
import { CourseService } from './../services/course.service';
import { Instructor } from '../models/Instructor';
import { NavbarService } from './../services/navbar.service';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


 
  categ:Category[]=[]
  courses:Course[] =[];
  topic:Topic[]=[];
  TopCateg:Category[]=[];
  searchText: string = '';
  Instructors: Instructor[] = [];
  studenrview:boolean=false;
  topicview:boolean=false;

  constructor(
    private homeServices:HomeService , 
    public activeRout:ActivatedRoute,
    private courseService:CourseService,
    private navbarService:NavbarService) {}

// GetTopRelateCourse(id:number){
// this.activeRout.params.subscribe(
//   a=>{
//     this.homeServices.getCourseRelatToTopic(id).subscribe(
//       b=>{
//         console.log("Success RelateByCourse",b);
//         this.courses=b;
//       },
//       err=>{
//         this.courses=[];
//         console.log("error of Relate Course",err)
//       }
//     )
//   }
// )
// }

  ngOnInit(): void {

    this.homeServices.getAllTopic().subscribe(
      a=>{

        this.topic=a;
      }
    )

// Get All Courses
this.courseService.GetAllCourses().subscribe(
  a=>{
   this.courses=a;
 },
 err=>{
   console.log("error"+ err);
 }
)

// Get Top Categories
this.homeServices.getTopCategories().subscribe(
  (a:any)=>{
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

 

}


