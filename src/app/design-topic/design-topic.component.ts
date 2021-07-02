import { Component, OnInit } from '@angular/core';
import { Course } from '../models/Course';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from './../services/course.service';
import { Topic } from '../models/Topic';
import { Category } from './../models/Category';

@Component({
  selector: 'app-design-topic',
  templateUrl: './design-topic.component.html',
  styleUrls: ['./design-topic.component.css']
})
export class DesignTopicComponent implements OnInit {

  courses:Course[]=[];
  topic:Topic | undefined;
totalLength:any;
page:number=1;


  constructor( private route:ActivatedRoute,private courseService:CourseService) { }

  ngOnInit(): void {

    this.route.paramMap
    .subscribe(params => {
      let topId = Number(params.get('id'));
      this.courseService.getTopicByTopicId(topId).subscribe(
        (res:any)=>{
            this.topic=res;
         console.log(res);
 
        }
      ),

      this.courseService.getCoursesByTopicId(topId).subscribe(
        (res: any) => {
         this.courses=res;
         console.log(res);
     
         this.totalLength=res.length;
          })
  })


}



}
