import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor() { }
  studentReslt:any;
  ngOnInit(): void {
  }
  

studentSchoolResult(){
  if(this.calculate(10,20) >= 40 ){
    this.studentReslt = "pass";
    return this.studentResult;
  }
  else{
    this.studentReslt  = "fail";
    return this.studentReslt;
  }
}

}
