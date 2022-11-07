import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  label:string="DotNet";
  constructor() { }

  ngOnInit(): void {
  }
  buttonClick(){
     this.label = "DotNet office";
  }
  buttonClick2(){
     this.label ="label value change on button2"
  }
  onChangeInput(){
      this.label ="onChangeinput label change";
  }
  onChangeLabelInput(event:any){
      this.label = event.target.value;
  }
}
