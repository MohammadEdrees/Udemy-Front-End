import { HttpHeaders } from '@angular/common/http';
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
  searchText: string = '';
  Instructors: Instructor[] = [];
  studenrview:boolean=false;
  topicview:boolean=false;

  constructor(
    private homeServices:HomeService , 
    public activeRout:ActivatedRoute,
    private courseService:CourseService,
    private navbarService:NavbarService) {}

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

    
    //---------------get all Instructors-----------------
    this.navbarService.GetAllInstructors().subscribe(
      (res: any) => {
        this.Instructors = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
this.topicview=true;
    this.homeServices.getAllTopic().subscribe(
      a=>{

        this.topic=a;
        this.topicview=false;
        console.log(a);
        console.log("success Topic");
      },
      err=>{
        console.log("error Topic"+ err);
      }
    )

this.studenrview=true;
// Get All Courses
this.courseService.GetAllCourses().subscribe(
  a=>{
   this.courses=a;
   this.studenrview=false;
   console.log(this.studenrview);
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

  // items = Array.from({length: 30}).map((_, i) => `Item #${i}`);
  gettopics(){
  
  }

}


