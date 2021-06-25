import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

import { ActivatedRoute, Router } from '@angular/router';

import { Category, SubCateg } from '../models/Category';


import {CategoryService} from '../services/Category.service'
@Component({
  selector: 'app-creat-video',
  templateUrl: './creat-video.component.html',
  styleUrls: ['./creat-video.component.css'],
  // providers: [{
  //   provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  // }]
})
export class CreatVideoComponent implements OnInit {
    firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  isEditable = true;
  clicked=true;
  // categorID!: number;
  panelOpenState = false;

  categories:Category[]=[];

  subcateg:SubCateg []=[];
  GeneralSection=[];
  generVide=[]

 _id!:number;
  // SelectCategory:any={
  //   supCatId:0,
  //   supCatTitle:""
  // }
  constructor(private _formBuilder: FormBuilder,public categoryService:CategoryService, public ar:ActivatedRoute) {
  //  this.GeneralSection.push(this.GeneralSection.length);
  //  this.generVide.push(this.generVide.length)
  }
  Display(){
    this.clicked=false;

  }



  ngOnInit() {
    this.showALL();
    this.OnSelect(3);

    this.ar.params.subscribe(
      a=>{
        console.log(a['_id']);
        this.categoryService.getSubByCategId(this._id).subscribe(
         d=>{
          console.log(d);
          this.subcateg=d;
         }
       )

       }
    )

    this.firstFormGroup = this._formBuilder.group({
      //  firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({

     secondCtrl: ['', Validators.required]
    });
  }

  showALL(){
    this.categoryService.getAll().subscribe(
      d=>{

        this.categories=d;
        console.log(this.categories)
      }
    )
  }

  OnSelect(_id:number){
      console.log("rania ");
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
  addGenter(){
  //  this.GeneralSection.push(this.GeneralSection.length);
  }
  addCreateVideo(){
   // this.generVide.push(this.generVide.length)
  }


}
