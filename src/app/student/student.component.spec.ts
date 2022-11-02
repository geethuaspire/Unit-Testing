import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AppRoutingModule } from '../app-routing.module';

import { StudentComponent } from './student.component';
import { StudentService } from './student.service';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
      TestBed.configureTestingModule({
      declarations: [ StudentComponent ],
      providers:[StudentService,HttpClient],
      imports:[AppRoutingModule,
      HttpClientModule,
      HttpClientTestingModule,
    ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("spyOn method",()=>{
    spyOn(component,'calculate');
    component.saveData();
    expect(component.calculate).toHaveBeenCalled();

  })

  it("spyOn method  - 1",()=>{
    spyOn(component,'calculate').and.returnValues(10,20);
    let result = component.studentResult();
    expect(result).toEqual("fail");

  })

  it("spyOn method  - 2",()=>{
    spyOn(component,'calculate').and.returnValues(10,20);
    let result = component.studentResult();
    expect(result).toEqual("fail");

  })

  it("spyOn method  - 3",()=>{
    let service = fixture.debugElement.injector.get(StudentService)
    spyOn(service,"saveDetails").and.callFake(()=>{
      return of({
        "result1":200
      })
    });
    component.saveData();
    expect(component.result).toEqual({
        "result1":200
    })
  })



});
