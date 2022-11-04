import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
   name = "The Dotnet Office";
   num1 = 100;
   num2 = 20;
  constructor() { }

  ngOnInit(): void {
  }

}
