import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  sum =0;
  result:any;
  studentResult:any;
  CountNumber:number = 0;
 private Name!:string;

  constructor(private service:StudentService) { }

  ngOnInit(): void {
  }
saveData(){
  let info ={
    sumVal:this.calculate(5,5),
    name : "Dot Ner Ofice"
  };
  this.saveDataIntoConsol(info);
  this.service.saveDetails(info).subscribe(response=>{
    this.result = response;
  })
}

saveDataIntoConsol(info:any){
  console.log(info);
  
}
private calculate(num1:number,num2:number){
  this.sum = num1 + num2;
  return this.sum;
}
increaseNumber(){
  this.CountNumber = this.CountNumber +1;
}
decreaseNumber(){
  this.CountNumber =this.CountNumber - 1;
}
private showName(){
  this.Name = "DotNet office";
}
}
