import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { faUser, faLock, faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { Instructor } from '../models/Instructor';
import { InstructorService } from '../services/instructor.service';


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
  constructor(private instructorService: InstructorService) { }

  registerForm: FormGroup = new FormGroup({

    address: new FormControl(),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    imagPath: new FormControl(),
    phone: new FormControl(),
    mail: new FormControl('', [Validators.required, Validators.email, Validators.pattern(this.emailPattern)]),
    shoppingCard: new FormControl(),
    instCrs: new FormControl(),
    communication: new FormControl(),
    fname: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(25), Validators.pattern(this.namePattern)]),
    lname: new FormControl(),
    language: new FormControl(),
    headLine: new FormControl(),
    biography: new FormControl()

  });

  submitted = false;
  hide = true;
  errorMessage: string = '';
  //new Object 
  newInstructor: Instructor = new Instructor('', '', '', 0, '', '', '', '', '', '', '', '', '');

  //assign icons
  faUser = faUser;
  faEnvelope = faEnvelope;
  faLock = faLock;
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  //Add user form actions
  get f() { return this.registerForm.controls; }

  // submit function
  submit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {

      return;
    }


    //True if all the fields are filled
    if (this.submitted) {
      this.newInstructor = this.registerForm.value;
      console.log(this.newInstructor);
      //call function on service
      this.instructorService.AddInstructor(this.newInstructor).subscribe(
        data => {
          console.log(data);
          // this.router.navigate(['login'])
        }, err => {
          this.errorMessage = err.error;
        }
      );
    }

  }


  ngOnInit(): void {

  }


}
