import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularTestingProject3';
  Count : number = 10;

  showMessage(msg:string):string{
    return msg;
  }
  increaseCount(num:number){
     this.Count = this.Count + num ;
  }
  decreaseCount(num:number){
    this.Count = this.Count - num ;
 }

}
