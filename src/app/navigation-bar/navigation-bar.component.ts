import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Category, Topic,SubCateg } from '../models/Category';


import {CategoryService} from '../services/Category.service'

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class NavigationBarComponent implements OnInit {
  
  categories:Category[]=[]
 
   subcateg:SubCateg []=[];
 topics:Topic []=[];
  constructor(public categoryService:CategoryService, public ar:ActivatedRoute) { }
  AddId(_id:number){
    console.log(_id);
    this.ar.params.subscribe(
      a=>{
        console.log(a['_id']);
        this.categoryService.getSubByCategId(_id).subscribe(
         d=>{
          console.log(d);
          this.subcateg=d;
         }
       )
       }
    )
  }
  AddTopic(_id:number){
   console.log(_id);
    this.ar.params.subscribe(
      a=>{
        console.log(a['_id']);
        this.categoryService.getTopicBySubId(_id).subscribe(
         d=>{
          console.log(d);
          this.topics=d;
         }
       )
       }
    )
  }
  
  ngOnInit(): void {
   let id:number=0;
 
 
    this.categoryService.getAll().subscribe(
      d=>{
     
        this.categories=d;
      }
    )
    // this.ar.params.subscribe(
    //       a=>{
    //         id = a['id']
    //         console.log(a['_id']);
    //         this.categoryService.getTopicBySubId(3).subscribe(
    //          d=>{
    //           console.log(d);
    //           this.topics=d;
    //          }
    //        )
    //        }
    //     )
   
      }
    
  }






