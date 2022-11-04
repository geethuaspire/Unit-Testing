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

it('interpolation test for textbook',()=>{
  const inputval:HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#usenum');
  expect(inputval.type).toEqual(component.type);
  component.type = "text";
  fixture.detectChanges();
  expect(inputval.type).toEqual(component.type);
  expect(inputval.readOnly).toBeFalsy();
})

});
