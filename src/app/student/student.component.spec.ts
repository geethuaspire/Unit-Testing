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

  it('button1',()=>{
    const element: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#button1');
    expect(component.label).toEqual("DotNet");
    element.click();
    fixture.detectChanges();
    expect(component.label).toEqual("DotNet office");
  })

  it('button2',()=>{
    const element: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#button2');
    expect(component.label).toEqual("DotNet");
    element.click();
    fixture.detectChanges();
    expect(component.label).toEqual("label value change on button2");
  })


  it('textbox1',()=>{
    const element: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#textbox1');
    expect(component.label).toEqual("DotNet");
    element.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.label).toEqual("onChangeinput label change");
  })

  it('textbox2',()=>{
    const element: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#textbox2');
    expect(component.label).toEqual("DotNet");
    element.value = "Dotnet - Updated";
    element.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.label).toEqual("Dotnet - Updated");
  })







});
