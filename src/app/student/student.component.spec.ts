import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { StudentComponent } from './student.component';
import { StudentService } from './student.service';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentComponent ],
      imports:[HttpClientModule,],
      providers:[ StudentService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('call private method',()=>{
    let spyName = spyOn<any>('component','showName')
    component["showName"]();
   // expect(component["Name"]).toEqual("DotNet office");
   expect(spyName).toHaveBeenCalled();
  })

  it('call private method',()=>{
    let spyMethod = spyOn<any>(component,'calculate')
    component["calculate"](10,20);
    // expect(component.sum).toEqual(30);
    // expect(spyMethod).toEqual(30);
    expect(spyMethod).toHaveBeenCalled();

  })


});
