import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category,SubCateg } from '../models/Category';
import {CategoryService} from '../services/Category.service'
@Component({
  selector: 'app-navbar-category',
  templateUrl: './navbar-category.component.html',
  styleUrls: ['./navbar-category.component.css']
})
export class NavbarCategoryComponent implements OnInit {
  category:Category | undefined;
 
  subcateg:SubCateg []=[];
  constructor(private route:ActivatedRoute,private categoryService:CategoryService) { }


  ngOnInit(): void {
   this.route.paramMap
      .subscribe(params => {
        let id =Number( params.get('categoryId'))|| 0;
        console.log(id);
        this.categoryService.getCategById(id ).subscribe(
         (d)=>{
         
           this.category=d;
          console.log(d);
          }
        )})
        this.route.paramMap
        .subscribe(params => {
          let id =Number( params.get('categoryId'))|| 0;
          console.log(id);
          this.categoryService.getSubByCategId(id ).subscribe(
           (d)=>{
             console.log(d);
             this.subcateg=d;
            }
          )})

  }
}
