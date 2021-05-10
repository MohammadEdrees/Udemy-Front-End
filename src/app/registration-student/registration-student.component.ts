import { Component, OnInit } from '@angular/core';
import {faGithub,faLyft,faEvernote,faBootstrap} from '@fortawesome/free-brands-svg-icons'
import {faUser,faLock,faEnvelope,faEye} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-registration-student',
  templateUrl: './registration-student.component.html',
  styleUrls: ['./registration-student.component.css']
})
export class RegistrationStudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  faGit=faGithub;
  faLyft=faLyft;
  faEvernote=faEvernote;
  faBootstrap=faBootstrap;
  faUser=faUser;
  faLock=faLock;
  faEnvelope=faEnvelope;
  faEye=faEye;

}
