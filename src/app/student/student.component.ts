import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  sum = 0;

  constructor() { }
  studentResult:any;
  ngOnInit(): void {
  }
  
  calculate(num1:any , num2:any){
    this.sum = num1 + num2;
    return this.sum;
  }

studentSchoolResult(){
  if(this.calculate(10,20) >= 40 ){
    this.studentResult = "pass";
    return this.studentResult;
  }
  else{
    this.studentResult  = "fail";
    return this.studentResult;
  }
}

}
