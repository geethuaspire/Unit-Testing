import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { StudentComponent } from './student.component';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;
  let deb:DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    deb = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Increase Count Click',()=>{
    const h1 = deb.query(By.css('h1'));
    const btn = deb.query(By.css('#btnincreaseNumber'));
    btn.triggerEventHandler('click',{});
    fixture.detectChanges();
    expect(component.CountNumber).toEqual(parseInt (h1.nativeElement.innerText)); 
  })

});
