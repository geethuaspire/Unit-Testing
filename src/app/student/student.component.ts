import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  name= "The Dotnet Office";
  num1 = 100;
  num2 = 20;

  type="number";
  placeholder ="givenumber";
  UserReadonly = false;
  constructor(private service:StudentService) { }

  ngOnInit(): void {
  }

}
