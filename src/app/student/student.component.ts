import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StudentService } from './student.service';
import { PostModel } from './post.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
    
  title = "The Dotnet Office";
  private sub!:Subscription;
  postData!:PostModel[];

  constructor( public service:StudentService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    debugger
    this.sub = this.service.getListOfdata().subscribe((post:any)=>{
      this.postData = post;
    })
  }


}
