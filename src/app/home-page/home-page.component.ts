import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit,ChangeDetectionStrategy,ViewEncapsulation} from '@angular/core';

import { HomeService } from '../services/home.service';
import{Course} from '../models/Course';
import{Topic} from '../models/Topic';

import { ActivatedRoute } from '@angular/router';
import { Category } from '../models/Category';



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
  constructor(private homeServices:HomeService , public activeRout:ActivatedRoute) {}

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




        // this.homeServices.getTopicRelatCourse(1006).subscribe(
        //   b=>{
        //     console.log("Success RelateByCourse",b);
        //     this.courses=b;
        //   },
        //   err=>{console.log("error of Relate Course",err)}
        // )

        this.homeServices.getAllCategruery().subscribe(
          a=>{
            console.log("success Categerory");
            this.categ=a;
            
          },
          err=>{
            console.log("error"+ err);
          }
        )


    // this.homeServices.getAllCourses().subscribe(
    //   a=>{
    //     console.log("success");
    //     //this.courses=a;
    //     console.log(a);
    //   },
    //   err=>{
    //     console.log("error"+ err);
    //   }

    // )
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





  }

  items = Array.from({length: 30}).map((_, i) => `Item #${i}`);

}
