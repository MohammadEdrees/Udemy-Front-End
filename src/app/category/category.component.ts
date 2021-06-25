import { Component, OnInit } from '@angular/core';
import { Category,SubCateg } from '../models/Category';
import {Course}from '../models/Course'
import { ActivatedRoute, Router } from '@angular/router';
import {CategoryService} from '../services/Category.service'
import { Instructor } from '../models/Instructor';
import { InstructorService } from '../services/instructor.service';
import { Topic } from '../models/Topic';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],

})
export class CategoryComponent implements OnInit {
  category:Category | undefined;
  courses:Course[]=[];
  subcateg:SubCateg []=[];
  Topics:Topic[]=[];
  Instructors:Instructor[]=[];
 
  constructor(private route:ActivatedRoute,private categoryService:CategoryService,private InstructorService:InstructorService) { }

  ngOnInit(): void {
   
    this.route.paramMap
    .subscribe(params => {
      let id =Number( params.get('categoryId'))|| 0;
      console.log(id);
      this.categoryService.getCategById(id ).subscribe(
       (d)=>{
         console.log(d);
         this.category=d;
        
        }
      )})
      this.route.paramMap
      .subscribe(params => {
        let id =Number( params.get('categoryId'))|| 0;
        console.log(id);
        this.categoryService.getOrderedCoursesInCateg(id ).subscribe(
         (d)=>{
           console.log(d);
           this.courses=d;

        }
        )})
        this.route.paramMap
        .subscribe(params => {
          let id =Number( params.get('categoryId'))|| 0;
          console.log(id);
          this.categoryService.getTopicsByCateg(id ).subscribe(
           (d)=>{
             console.log(d);
             this.Topics=d;
  
          }
          )})

          this.route.paramMap
          .subscribe(params => {
            let id =Number( params.get('categoryId'))|| 0;
            console.log(id);
            this.InstructorService.GetInstructorsByCategId(id ).subscribe(
             (d)=>{
               console.log(d);
               this.Instructors=d;
             
            }
            )})
          
            this.route.paramMap
            .subscribe(params => {
              let id =Number( params.get('supCatId'))|| 0;
              console.log(id);
              this.categoryService.getOrderedCoursesInSubCateg(id ).subscribe(
               (d)=>{
                 console.log(d);
                 this.courses=d;
      
              }
              )})
     
  }

}