import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationBarComponent implements OnInit {

  constructor(private navbarService: NavbarService) { }

  ngOnInit(): void {
    //------------ get all category on init -------------
    // this.navbarService.GetAllCategory().subscribe(
    //   data => {
    //     console.log(data);
    //   }, err => {
    //     console.log(err);
    //   }
    // );


  }





}
