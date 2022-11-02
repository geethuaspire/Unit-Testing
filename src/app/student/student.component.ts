import { ParseSourceFile } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  sum = 0;
  result:any;
  
  constructor(public service:StudentService) { }

  ngOnInit(): void {
  }
  calculate(num1:any , num2:any){
    this.sum = num1 + num2;
    return this.sum;
  }

  saveData(){
    let info = {
      sumVal:this.calculate(5,5),
      name:"Dot Net Office"
    };
    this.saveDataInToConsol(info);
    this.service.saveDetails(info).subscribe(res=>{
      this.result = res;
    })
  }
saveDataInToConsol(info:any){
  console.log(info);
  
}
studentResult(){
  if(this.calculate(10,20) >= 40){
    return "Pass";
  }
  else{
    return "fail";
  }
}
}
