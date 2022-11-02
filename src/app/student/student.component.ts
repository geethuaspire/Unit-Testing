import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  CountNumber=0;
  constructor() { }

  ngOnInit(): void {
  }

  saveDataIntoConsoe(info:any){
    console.log(info);
    
  }
   
  increaseNumber(){
    this.CountNumber = this.CountNumber + 1;
  }
  decreaseNumber(){
    this.CountNumber = this.CountNumber - 1;
  }
}
