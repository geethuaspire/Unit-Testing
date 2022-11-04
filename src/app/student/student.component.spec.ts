import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { StudentComponent } from './student.component';
import { StudentService } from './student.service';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;
  let service:StudentService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentComponent ],
      imports:[ HttpClientTestingModule],
      providers:[StudentService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(StudentService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

it('Unit testfor subscribe method', fakeAsync(()=>{
  let spy = spyOn(service , 'getListOfdata').and.returnValue(of([]));
  let subSpy = spyOn(service.getListOfdata(),'subscribe');
  component.ngOnInit();
  tick();
  expect(spy).toHaveBeenCalledBefore(subSpy);
  expect(subSpy).toHaveBeenCalled();
}));

});
