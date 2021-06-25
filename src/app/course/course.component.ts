import { Component, OnInit,ViewChild } from '@angular/core';
import { Category,SubCateg } from '../models/Category';
import {Course}from '../models/Course'
import { ActivatedRoute, Router } from '@angular/router';
import {CategoryService} from '../services/Category.service'
import { Instructor } from '../models/Instructor';
import { InstructorService } from '../services/instructor.service';
import {MatAccordion} from '@angular/material/expansion';
import { Section } from '../models/Section';
import { lecture } from '../models/lecture';
import { Topic } from '../models/Topic';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private route:ActivatedRoute,private categoryService:CategoryService,private InstructorService:InstructorService,public ar:ActivatedRoute) { 
   
  }
  course:Course | undefined;
  sections:Section[]=[];
  lectures:lecture[]=[];
  step = 0;
   //  get  Lectures by section Id
  AddLecture(_id:number){
    console.log(_id);
    this.ar.params.subscribe(
      a=>{
        console.log(a['_id']);
        this.categoryService.getAllLecturesBySectionId(_id).subscribe(
         d=>{
          console.log(d);
          this.lectures=d;
         }
       )
       }
    )
  }
  ngOnInit(): void {

    this.route.paramMap
    .subscribe(params => {
      let id =Number( params.get('crsId'))|| 0;
      console.log(id);
      this.categoryService.getcourseBycourseId(id).subscribe(
       (d)=>{
         this.course=d;
       
      }
      )
    })
         //  get All Sections
         this.route.paramMap
         .subscribe(params => {
           let id =Number( params.get('crsId'))|| 0;
           console.log(id);
           this.categoryService.getAllsectionsByCourseId(id).subscribe(
            (d)=>{
              this.sections=d;
     
           }
           )
         })
        
 
  }

  @ViewChild(MatAccordion)accordion: MatAccordion | undefined;

}