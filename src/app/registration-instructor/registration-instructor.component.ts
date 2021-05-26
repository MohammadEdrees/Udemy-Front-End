import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {faUser,faLock,faEnvelope,faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import {  InstructorService } from '../services/instructor.service';


@Component({
  selector: 'app-registration-instructor',
  templateUrl: './registration-instructor.component.html',
  styleUrls: ['./registration-instructor.component.css']
})
export class RegistrationInstructorComponent implements OnInit {
  namePattern = "^[a-zA-Z_-]{5,25}$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,7}.com$";
  pwdPattern = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,20}$";

  // add FormBuilder to constructor to suit password strength bar
  constructor(private instructorService:InstructorService) { }

  registerForm: FormGroup = new FormGroup({
    FullName: new FormControl('', [Validators.required, Validators.minLength(5),Validators.maxLength(25),Validators.pattern(this.namePattern)]),
    email: new FormControl('', [Validators.required, Validators.email,Validators.pattern(this.emailPattern)]),
    password : new FormControl('', [Validators.required, Validators.minLength(8),Validators.maxLength(20)]),
    
  });

  submitted = false;
  hide = true;
  
  faUser=faUser;
  faEnvelope=faEnvelope;
  faLock=faLock;
  faEye=faEye;
  faEyeSlash=faEyeSlash;
  //Add user form actions
  get f() { return this.registerForm.controls; }
  submit() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    
    //True if all the fields are filled
    if(this.submitted)
    {
        console.log("registeration success");
    }

  }

  
  ngOnInit(): void {
   
  }

  
}
