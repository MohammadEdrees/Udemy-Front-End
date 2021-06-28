import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { InstructorService } from './../services/instructor.service';

@Component({
  selector: 'app-edit-instrucror',
  templateUrl: './edit-instrucror.component.html',
  styleUrls: ['./edit-instrucror.component.css']
})
export class EditInstrucrorComponent implements OnInit {

  constructor(private insService:InstructorService ,
              private route:ActivatedRoute
              ) { }
  v: boolean = true;
  isBold: boolean = false;
  isItalic: boolean = false;
  headline: string = '';
  length: number = 60;
  isAlert:boolean=false;
  insDetails:any;

language:string='';

  get f(){
    return this.myForm.controls;
  }

//image form
imgSubmitted = false;

  myForm :FormGroup= new FormGroup({
   file: new FormControl('', [Validators.required])
 });


  //  on select image set image url 
  url: string = "../../assets/anonymous.png";
  onSelectImg(e: any) {
    this.isAlert=false;
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result; 
      }
    }
  }
// img form submit button
  submitImg(files:any){
    this.imgSubmitted=true;
    if (this.myForm.invalid) {
      return;
    }

    let uploadImage = <File> files[0];
    const formData=new FormData();
    formData.append('file',uploadImage,uploadImage.name );

    this.insService.uploadImg(this.insDetails.instId, formData).subscribe(
      res=>{
        this.isAlert=true;
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    )

  }


  // headline input length
  onChange() {
    this.length = 60 - this.headline.length;
  }

  ngOnInit(): void {
    this.route.paramMap
    .subscribe(params => {
      let id = Number(params.get('id'));
      this.insService.getInstructorById(id).subscribe(
        (res: any) => {
          this.insDetails = res;
          if(res.imagPath){
          this.url=res.imagPath;
          }

          this.editForm = new FormGroup({
           instId:new FormControl(res['instId']),
            fname: new FormControl(res['fname'],
             [Validators.required, Validators.minLength(5),Validators.maxLength(25),Validators.pattern(this.namePattern)]),
            
             lname:new FormControl(res['lname'],
             [Validators.minLength(5),Validators.maxLength(25),Validators.pattern(this.namePattern)]),

            phone:new FormControl(res['phone'],
           [Validators.pattern(this.phonePattern)]),

            imagPath :new FormControl(res['imagPath']),
            language: new FormControl(res['language']),

            headLine:new FormControl(res['headLine']),
            biography: new FormControl(res['biography'],[Validators.minLength(50)]),
            address:new FormControl(res['address'],[Validators.minLength(4),Validators.maxLength(20)]),
            mail:new FormControl(res['mail']),
            password:new FormControl(res['password']),
            _Class:new FormControl(res['_Class']),

          });

        
          console.log(this.insDetails);
        });
    })

 


  }
  myname: string = 'sara';
  toggle: boolean = false;
  genarteChar(name: string) {
    return name.charAt(0).toUpperCase();
  }

  // edit form 
  namePattern = "^[a-zA-Z_-]{5,25}$";
  phonePattern = "^[0-9]{1,4}[-]{1}[0-9]{5,20}$";


  editForm: FormGroup = new FormGroup({
    fname: new FormControl( ''),
    lname:new FormControl(''),
    phone:new FormControl(''),
    language: new FormControl(''),
    headLine:new FormControl(''),
    biography: new FormControl(''),
    address:new FormControl(''),
    mail:new FormControl(''),
    password:new FormControl(''),
    _Class:new FormControl(''),

  });

  onselectlanguage(e:any){
    this.language=e.target.value;
  }

  submitted = false;
  get f2() { return this.editForm.controls; }
  editFormSubmit(){
this.submitted = true;
console.log(this.editForm.value);
// stop here if form is invalid
if (this.editForm.invalid) {
  console.log("invalid");
  return;
}

//      Submit
if (this.submitted) {

  console.log(`edit form `,this.editForm.value);
  console.log(`details `, this.insDetails);

  //call function on service
  this.insService.editInstructor(this.insDetails?.instId ,this.editForm.value).subscribe(
    data => {
      console.log(data);
    }
  );
}

  }


  
}
