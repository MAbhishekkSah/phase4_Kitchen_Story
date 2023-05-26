import { Component } from '@angular/core';
import { ItemsServiceService } from './items-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kitchen_Story';
  pageChangeFlag:number = 0;

  isClicked(flag:any){
    console.log(flag);
    if(flag == "Y")
    {
      this.pageChangeFlag = 1;
      console.log("ind -> "+this.pageChangeFlag);
    }
  }
}
