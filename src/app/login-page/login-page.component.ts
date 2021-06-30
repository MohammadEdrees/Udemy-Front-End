import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  show: boolean;
  constructor(private loginService: LoginService,private router:Router) {
    this.show = false;
  }

  password() {
    this.show = !this.show;
}
// email pattern
emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,7}.com$";
submitted = false;
hide = true;
errorMessage: string = '';


// form object 
  registerForm: FormGroup = new FormGroup({
    mail: new FormControl('', [Validators.required, Validators.email, Validators.pattern(this.emailPattern)]),
    password: new FormControl('', [Validators.required]),
  });


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
      
      if(localStorage.getItem('token')!=null){
        localStorage.removeItem('token');
      }

    console.log(this.registerForm.value);
    this.loginService.login(this.registerForm.value.mail,this.registerForm.value.password).subscribe(
      (data : any )  => {
        console.log(data);
       localStorage.setItem('token',data?.token);
       localStorage.setItem('LoginedId', data['stdId']  || data['instId'] );
       localStorage.setItem('class',data?._Class);

       this.loginService.isAuthenticated = true;
       this.loginService.loggedIn.next(true)

        if (data?._Class=="student"){
          this.router.navigate(['topnav/editStd'])
        } else if (data?._Class=="instructor"){
          this.router.navigate(['topnav/home'])
        }
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
