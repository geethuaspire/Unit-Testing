import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  it("Test1",()=>{
//Arrange
let comp = new AppComponent();
//Act
let msg = comp.showMessage("Hello");
//Assert
expect(msg).toBe("Hello");
  })
});
