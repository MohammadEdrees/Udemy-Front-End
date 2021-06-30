import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, SubCateg } from '../models/Category';
import { CategoryService } from '../services/Category.service'
import { CourseService } from './../services/course.service';
import { Topic } from './../models/Topic';
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
  clicked:boolean = true;
  // categorID!: number;
  panelOpenState = false;

  categories: Category[] = [];
  subcateg: SubCateg[] = [];
  GeneralSection = [];
  generVide = [];
  topics: Topic[] = [];

  selectedCategoryId: number | undefined
  selectedSubCategoryId: number | undefined
 moveToStep3:boolean=false;
 submitSuccess:boolean=false;

  _id!: number;
  // SelectCategory:any={
  //   supCatId:0,
  //   supCatTitle:""
  // }
  constructor(private _formBuilder: FormBuilder, public categoryService: CategoryService,
    public ar: ActivatedRoute, private courseService: CourseService
  ) {
    //  this.GeneralSection.push(this.GeneralSection.length);
    //  this.generVide.push(this.generVide.length)
  }
  Display() {
    this.clicked = false;

  }



  ngOnInit() {
    this.showALL();
    //this.OnSelect(3);

    // this.ar.params.subscribe(
    //   a=>{
    //     console.log(a['_id']);
    //     this.categoryService.getSubByCategId(this._id).subscribe(
    //      d=>{
    //       console.log(d);
    //       this.subcateg=d;
    //      }
    //    )

    //    }
    // )

    this.firstFormGroup = this._formBuilder.group({

    });
    this.secondFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      secondCtrl: ['', Validators.required]
    });

  }

  showALL() {
    this.categoryService.getAll().subscribe(
      d => {

        this.categories = d;
        console.log(this.categories)
      }
    )
  }

  onSelectCategory(e: any) {  // category
    let id = e.target.value;
    this.ar.params.subscribe(
      a => {
        console.log(id);
        this.selectedCategoryId = id;
        this.categoryService.getSubByCategId(id).subscribe(
          d => {
            console.log(d);
            this.subcateg = d;
            
          }
        )

      }
    )
  }

  onSelectSubCategory(e: any) {  // sub category
    let id = e.target.value;
    this.ar.params.subscribe(
      a => {
        console.log('subcategid : ', id);
        this.selectedSubCategoryId = id;
        this.courseService.getTopicsBySubCateogryId(id).subscribe(
          d => {
            console.log('topics ', d);
            this.topics = d;
            this.moveToStep3=true;

          }
        )

      }
    )
  }


  addGenter() {
    //  this.GeneralSection.push(this.GeneralSection.length);
  }
  addCreateVideo() {
    // this.generVide.push(this.generVide.length)
  }


  // -------------- step 3 ---------------

  //---------------------- title ------------------
  title: string = '';
  titleLength: number = 51;
  onTitleChange() {
    this.titleLength = 51 - this.title.length;
  }

  //---------------------- subtitle ------------------
  subtitle: string = '';
  subtitleLength: number = 60;
  onSubTitleChange() {
    this.subtitleLength = 60 - this.subtitle.length;
  }

  //---------------------- description ---------------
  isBold: boolean = false;
  isItalic: boolean = false;


  isPaid: boolean = false;


  // ----------------------- image ------------------- 
  url: string = '../../assets/8.jpg';
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

  insId: number = Number(localStorage.getItem('LoginedId'));
  submitted = false;
  imgSubmitted=false;

  courseFormGroup: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5),Validators.maxLength(51)]),
    description: new FormControl('',[Validators.required, Validators.minLength(5),Validators.maxLength(100)]),
    paymentMethod: new FormControl('' ,[Validators.required]),
    languge: new FormControl('',[Validators.required]),
    levels: new FormControl('',[Validators.required]),
    subtitle: new FormControl('',[Validators.required, Validators.minLength(5),Validators.maxLength(60)]),
    rate: new FormControl(0),
    state: new FormControl('unpublished'),
    topId: new FormControl('',[Validators.required]),
    instId: new FormControl(this.insId),
    price: new FormControl(''),

  });

  // form 
  get f() { return this.courseFormGroup.controls; }

  //img form
  get f2() { return this.crsImgForm.controls; }

  loader: boolean = false;
  success: boolean = false;
  courseId: number | undefined;


  onSubmit(files: any) {
    this.submitted = true;
    this.imgSubmitted=true;
    // stop here if form is invalid
    if (this.courseFormGroup.invalid) {
      console.log("invalid create course form");
      return;
    }
    if (this.crsImgForm.invalid) {
      console.log("invalid img course form");
      return;
    }


this.submitSuccess=true;


    this.success=false;
    let uploadImage = <File>files[0];
    const formData = new FormData();
    formData.append('file', uploadImage, uploadImage.name);

    console.log(this.courseFormGroup.value);
    if (this.showInput == false) {
      this.courseFormGroup.value.price = 0;
      
    }
    this.loader = true;
    this.courseService.addNewCourse(this.insId, this.courseFormGroup.value).subscribe(
      (res: any) => {
        console.log(res);
        this.courseId = res?.crsId;
        this.courseService.uploadCrsImg(res?.crsId, formData).subscribe(
          imgres => {
            console.log(`img`, imgres);
            this.loader = false;
            this.success = true;

          },err=>{
            this.loader = false;
          }
        )
      },err=>{
        this.loader = false;
      }
    )
  }

  crsImgForm: FormGroup = new FormGroup({
    file: new FormControl('', [Validators.required])
  });

  showInput: boolean = false;

  changeMethod(e: any) {
    let v = e.target.value;
    if (v == 0) {
      this.showInput = false;
      this.f.price.clearValidators();
    }
    if (v == 1) {
      this.showInput = true;
      this.f.price.setValidators(Validators.required);
    }

    this.f.price.updateValueAndValidity();
  }


}
