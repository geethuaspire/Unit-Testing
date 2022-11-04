import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  num = 20;
  redColor = 'font-red';
  blueColor = 'font-blue';
  constructor(public serice:StudentService) { }

  ngOnInit(): void {
  }

}
