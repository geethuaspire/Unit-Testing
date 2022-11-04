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

  it('interpolation test',()=>{
        
    const name : HTMLElement = fixture.debugElement.nativeElement.querySelector('#name');
    expect(name.innerHTML).toEqual(component.name);
    component.name = "name-updated";
    fixture.detectChanges();
    expect(name.innerHTML).toEqual(component.name);
    
  })

});
