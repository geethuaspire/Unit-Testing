import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Addition } from './calculator';       // import calculator.ts

describe('AppComponent', () => {

  let component = new AppComponent(); // object of component

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'AngularTestingProject'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('AngularTestingProject');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('AngularTestingProject app is running!');
  });

  it('My Testcase',()=>{
    expect(true).toBe(true)
  })

  
  it('Show Alert Message',()=>{                                 //fn in the app.component.ts
    expect(component.showMessage("Hello")).toBe("Hello");
  })

                                                
  xit('Show the Addition Result',()=>{                            //fn in calculator.ts file
     expect(Addition(10,20)).toBe(30);                             //when x use before it,ie,Xit() then it won't execute
    // expect(Addition(10,20)).toBeGreaterThan(20);
  })

  it('ToBe and TOEqual Test case',()=>{
   // var a = "Hello";
    //var b = "Hello";

    var a =1;
    var b = 1;
   //var a =['1'];    //won't work. it support string,number, and Boolean.But toEqual will work
  // var b = ['2'];


   // expect(a).toBe(b);     //toBe for primitive data types string,numbers and Boolean only

    expect(a).toEqual(b);   // everything else use toEqual
  })

  it('ToBe and TOEqual Testcase 2',()=>{

   // var a = "Hello";
   // expect(a).toBe("Hello");

   //var a =true;
   //expect(true).toBe(true);
  //expect(a).toBeTrue();
  var a =false;
 // expect(a).toBeTrue();
 // expect(a).toBeFalse();   //both of these check whether it is true or false
 // expect(a).toBeTruthy(); // it should be true
 //(undefined).toBeTruthy(); // undefined is not a true value.so fail
  //expect(undefined).toBeFalsy(); //it will success
  //expect(undefined).toBeFalse(); //it will fail.because it whck whether it is true or false
  //expect(undefined).toBeFalsy("abc"); //it ovrload this.we can assign any value. toBeFalse or toBeTrue cannot beused here
    expect(a).toBeFalsy(); //it should be false
     })

     it('toBeGreaterThan and toBeGreaterThanOrEqual',()=>{

      var a =5;
      expect(a).toBeGreaterThan(4); //a should be greater than 4
      //expect(a).toBeGreaterThan(6); //will fail
      expect(a).toBeGreaterThanOrEqual(5);
     })
  it('toBeLessThan and toBeLessThanOrEqual',()=>{
    var a=5;
   // expect(a).toBeLessThan(6);
   expect(a).toBeLessThanOrEqual(5);
  })

  it('jasmine matcher -Match function',()=>{
    var input = "The dot net office tutorials";
    var strPhone = "001-789-56-67";
    expect(input).toMatch(/dotnetoffice/);
    expect(input).toMatch(/dotnetoffice/i);
    expect(input).not.toMatch(/dot1/);
    expect(strPhone).toMatch(/\d[3] - \d[3] -\d[2]/);
  })


  it('JasminMatcher -toBeCloseTo', ()=>{
    var pi = 3.1415926, e =2.78;
    expect(pi).not.toBeCloseTo(e);
    expect(pi).toBeCloseTo(e,0);
    expect(4.334).toBeCloseTo(4.334);
    expect(4.334).not.toBeCloseTo(4.3345,1);
    expect(4.334).not.toBeCloseTo(4.3345,2);
    expect(4.334).not.toBeCloseTo(4.3,2);
    expect(4.223).not.toBeCloseTo(4.22,3);
    expect(4.223).not.toBeCloseTo(4.22,4);
    })

});
