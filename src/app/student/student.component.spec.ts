import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { StudentComponent } from './student.component';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentComponent ],
      providers:[],
      imports:[FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('set student name from component',()=>{
       component.studentName = "Dotnet office Updated";
       fixture.detectChanges();

       fixture.whenStable().then(()=>{
        const element:HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#name');
        expect(element.value).toEqual('Dotnet office Updated');
        done();
         
       })

   

    it('set textbox value',(done)=>{
            fixture.detectChanges();
            fixture.whenStable().then(()=>{
              const element :HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#name');
              element.value = "textbox updated";
              element.dispatchEvent(new Event('input'));
              expect(element.value).toEqual(component.studentName);
              done();
            });

     it('Button click test case',()=>{
      fixture.detectChanges();
      const element:HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#button1');
      fixture.whenStable().then(()=>{
        element.click();
        expect(component.studentName).toEqual("DotNet Office");
        fixture.detectChanges();
        fixture.whenStable().then(()=>{
          const element: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#name');
          expect(element.value).toEqual('Dotnet Office');
         done();
        })
      })
     })

    });

});
function done() {
  throw new Error('Function not implemented.');
}

 });