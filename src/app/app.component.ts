import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClientSide';


  OnActive(_e: any,outlet: { scrollTop: number; })
  {
     outlet.scrollTop=0;
  }

}
