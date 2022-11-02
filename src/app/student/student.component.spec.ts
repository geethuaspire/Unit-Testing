import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentComponent } from './student.component';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;
  let h1: HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    h1 = fixture.nativeElement.querySelector('h1')
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

it('verify the h1 element value', ()=>{
  component.studentSchoolResult();
  fixture.detectChanges();
  expect(h1.textContent).toBe(component.studentResult);
})

});
