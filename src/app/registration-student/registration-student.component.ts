import { Component, OnInit } from '@angular/core';
import {faGithub,faLyft,faEvernote,faBootstrap} from '@fortawesome/free-brands-svg-icons'
import {faUser,faLock,faEnvelope,faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { StudentService } from '../services/student.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-student',
  templateUrl: './registration-student.component.html',
  styleUrls: ['./registration-student.component.css']
})

export class RegistrationStudentComponent implements OnInit {
 
  namePattern = "^[a-zA-Z_-]{5,25}$";
 // emailPattern =" ^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$";
 emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,7}.com$";

  
  constructor(private student:StudentService,private router: Router) { }

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
  faGit=faGithub;
  faLyft=faLyft;
  faEvernote=faEvernote;
  faBootstrap=faBootstrap;
 faEyeSlash=faEyeSlash;
  //Add user form actions
  get f() { return this.registerForm.controls; }


  submit() {

   
    // stop here if form is invalid
    if (this.registerForm.valid) {
      this.submitted = true;
      console.log(this.registerForm.value);
    this.student.PutStudent(this.registerForm.value)
    .pipe(first())
    .subscribe(
      result => this.router.navigate(['login'])
    )
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
