import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Addition } from './calculator';  
describe('AppComponent', () => {

beforeAll(function(){
  console.log("Before All");
})
afterAll(function(){
  console.log("After All")
})
var comp : AppComponent;    //declare var comp of type AppComonent

beforeEach(function(){    // beforeEah used to initialize the component
 comp = new AppComponent();   //create instance comp here. beforeach will initiate this before every testcase run
  console.log("Before Each")
})

afterEach(function(){ //afterEach used to nullify the obect
 // comp = null; // whatever the object we are having,assign it to null, used to nullify the object
  console.log("After Each")
})

  it("Increase count",()=>{

    comp.increaseCount(2);

    expect(comp.Count).toEqual(12)

    console.log("Increase");

  })

  it("Decrease count",()=>{

    comp.decreaseCount(2);

    expect(comp.Count).toEqual(8);

    console.log("Decrease");
  })

  it("test3",()=>{
    console.log("test 3");
  })
  });
