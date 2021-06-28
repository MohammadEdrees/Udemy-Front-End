import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
// import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, SubCateg } from '../models/Category';
import {CategoryService} from '../services/Category.service'
import { CourseService } from './../services/course.service';
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

  selectedCategoryId:number | undefined
  selectedSubCategoryId:number | undefined


 _id!:number;
  // SelectCategory:any={
  //   supCatId:0,
  //   supCatTitle:""
  // }
  constructor(private _formBuilder: FormBuilder,public categoryService:CategoryService, 
    public ar:ActivatedRoute, private courseService:CourseService
    ) {
  //  this.GeneralSection.push(this.GeneralSection.length);
  //  this.generVide.push(this.generVide.length)
  }
  Display(){
    this.clicked=false;

  }



  ngOnInit() {
    this.showALL();
    //this.OnSelect(3);

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
    
    });
    this.secondFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
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

  onSelectCategory(e:any){  // category
      let id=e.target.value;
      this.ar.params.subscribe(
        a=>{
          console.log(id);
          this.selectedCategoryId=id;
          this.categoryService.getSubByCategId(id).subscribe(
           d=>{
            console.log(d);
            this.subcateg=d;
           }
         )

         }
      )
  }

  onSelectSubCategory(e:any){  // sub category
    let id=e.target.value;
    this.ar.params.subscribe(
      a=>{
        console.log(id);
        this.selectedSubCategoryId=id;
        this.categoryService.getSubByCategId(id).subscribe(
         d=>{
          console.log(d);
         
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


  // -------------- step 3 ---------------

//---------------------- title ------------------
  title:string='';
  titleLength:number=51;
  onTitleChange(){
    this.titleLength = 51 - this.title.length;
  }

//---------------------- subtitle ------------------
  subtitle:string='';
  subtitleLength:number=60;
  onSubTitleChange(){
    this.subtitleLength = 60 - this.subtitle.length;
  }

//---------------------- description ---------------
isBold: boolean = false;
isItalic: boolean = false;


isPaid: boolean = false;


// ----------------------- image ------------------- 
url:string='../../assets/8.jpg';
//  on select image set image url 
onSelectImg(e: any) {
  if (e.target.files) {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (event: any) => {
      this.url = event.target.result; 
    }
  }
}

insId:number=Number(localStorage.getItem('LoginedId'));

  courseFormGroup: FormGroup = new FormGroup({

    title: new FormControl(''),
    description: new FormControl(''),
    paymentMethod: new FormControl(0),
    languge: new FormControl(''),
    levels: new FormControl(''),
    subtitle: new FormControl(''),
    rate: new FormControl(4),
    state: new FormControl('free'),
    topId: new FormControl(1008),
    instId: new FormControl(this.insId),
    price: new FormControl(1200),

  });

  
  onSubmit(files:any){
    let uploadImage = <File> files[0];
    const formData=new FormData();
    formData.append('file',uploadImage,uploadImage.name );

// console.log(this.courseFormGroup.value);
 this.courseService.addNewCourse(this.insId,this.courseFormGroup.value).subscribe(
   (res:any)=>{
     console.log(res);
this.courseService.uploadCrsImg(res?.crsId,formData).subscribe(
  imgres=>{
    console.log(`img`,imgres);
  }
)
   }
 )
  }
 
  crsImgForm :FormGroup= new FormGroup({
    file: new FormControl('', [Validators.required])
  });


}
