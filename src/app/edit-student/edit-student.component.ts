import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from './../services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  constructor( private route:ActivatedRoute,
    private stdService:StudentService
    ) { }
v: boolean = true;
isAlert:boolean=false;
stdDetails:any;
profileImageUrl:string='http://ssl.gstatic.com/accounts/ui/avatar_2x.png';
imageloader:boolean=false;
editloader:boolean=false;
savedSuccess:boolean=false;

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
  this.imageloader=false;
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
  this.isAlert=false;
  this.imageloader=false;
this.imgSubmitted=true;
if (this.myForm.invalid) {
return;
}

this.imageloader=true;
let uploadImage = <File> files[0];
const formData=new FormData();
formData.append('file',uploadImage,uploadImage.name );

this.stdService.uploadImg(this.stdDetails.stdId, formData).subscribe(
(res:any)=>{
  this.imageloader=false;
  this.isAlert=true;

console.log(res);
this.profileImageUrl=res.imagePath;
},
err=>{
console.log(err);
}
)

}


ngOnInit(): void {
this.route.paramMap
.subscribe(params => {
let id = Number(params.get('id'));
this.stdService.GetStudent(id).subscribe(
(res: any) => {
this.stdDetails = res;
if(res.imagePath){
this.url=res.imagePath;
this.profileImageUrl=res.imagePath;
}

this.editForm = new FormGroup({
  stdId:new FormControl(res['stdId']),
  fname: new FormControl(res['fname'],
   [Validators.required, Validators.minLength(5),Validators.maxLength(25),Validators.pattern(this.namePattern)]),
  
   lname:new FormControl(res['lname'],
   [Validators.minLength(5),Validators.maxLength(25),Validators.pattern(this.namePattern)]),

  phone:new FormControl(res['phone'],
 [Validators.pattern(this.phonePattern)]),

  imagePath :new FormControl(res['imagePath']),
  address:new FormControl(res['address'],[Validators.minLength(4),Validators.maxLength(20)]),
  mail:new FormControl(res['mail']),
  password:new FormControl(res['password']),
  _Class:new FormControl(res['_Class']),

});


console.log(this.stdDetails);
});
})




}


// edit form 
namePattern = "^[a-zA-Z_-]{5,25}$";
phonePattern = "^[0-9]{1,4}[-]{1}[0-9]{5,20}$";


editForm: FormGroup = new FormGroup({
fname: new FormControl( ''),
lname:new FormControl(''),
phone:new FormControl(''),
address:new FormControl(''),
mail:new FormControl(''),
password:new FormControl(''),
_Class:new FormControl(''),

});



submitted = false;
get f2() { return this.editForm.controls; }


editFormSubmit(){
this.editloader=false;
this.savedSuccess=false;

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
console.log(`details `, this.stdDetails);
this.editloader=true;
//call function on service
this.stdService.editStudent(this.stdDetails?.stdId ,this.editForm.value).subscribe(
(data:any) => {
this.editloader=false;
this.savedSuccess=true;
console.log(data);
this.stdDetails.fname=data.fname;
this.stdDetails.lname=data.lname;

}
);
}

}



}
