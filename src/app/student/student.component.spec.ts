import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentComponent } from './student.component';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('ngclass testcase for paragraph',()=>{
   
    const element = fixture.debugElement.nativeElement.querySelector("#header");
    expect(element.getAttribute('style')).toContain('color:black');
  })



  it('ngclass testcase for h1',()=>{
   
    const element = fixture.debugElement.nativeElement.querySelector("#header1");
    component.num = 5;
    fixture.detectChanges();
    expect(element.getAttribute('class')).toContain('font-red');
  })

});
