import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor( private http:HttpClient) { }
  saveDetails(info:any){
    return this.http.post("http://localhost:4200",info);
  }
}
