import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-edit-instrucror',
  templateUrl: './edit-instrucror.component.html',
  styleUrls: ['./edit-instrucror.component.css']
})
export class EditInstrucrorComponent implements OnInit {

  constructor() { }
v:boolean=true;
  ngOnInit(): void {
  }
  myname:string='sara';
  toggle:boolean=false;
  genarteChar(name: string) {
    return name.charAt(0).toUpperCase();
  }

 
}
