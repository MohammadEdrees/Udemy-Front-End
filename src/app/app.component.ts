import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClientSide';


  onActivate(e:any){
    //window.scroll(0,0);
    document.body.scrollTop = 0;
  }
}
