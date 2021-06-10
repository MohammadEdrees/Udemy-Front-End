import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit,ChangeDetectionStrategy,ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {

  Categories=[];
  constructor() { }
  
  ngOnInit(): void {
  
   
  }
  
  items = Array.from({length: 30}).map((_, i) => `Item #${i}`);

  GetCategories(){

  }
}
