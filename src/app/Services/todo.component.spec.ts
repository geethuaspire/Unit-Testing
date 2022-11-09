import { Observable } from "rxjs";
import { TodosComponent } from "./todo.component";
import { TodoService } from "./todo.service";
import 'rxjs/add/obse/from';
import 'rxjs/add/obse/empty';
import 'rxjs/add/obse/throw';
import { Component } from "@angular/core";

describe('TodosComponent',()=>{
    let component: TodosComponent;
    let service:TodoService;

    beforeEach(()=>{
       // service = new TodoService(null);
        component =new TodosComponent(service);

    });

    it('should set todos property with the items returned from the server',()=>{
        let todos:any = [1,2,3];
          spyOn(service,'getTodos').and.callFake(()=>{
          //   return Observable.from([ [
    
                todos
           //  ] ]);
          });
          component.ngOnInit();
        //   expect(component.todos.length).toBeGreaterThan(0);
        expect(component.todos).toBe(todos);

    });
    it('should call the server to save the changes when a new todo is added',()=>{
        let spy = spyOn(service,'add').and.callFake(t=>{
          //  return Observable.empty();
         });

         component.add();
         expect(spy).toHaveBeenCalled();
    });

    it('should add the new todo returned from the server',()=>{
        let todo ={id:1}
       //  let spy = spyOn(service,'add').and.returnValue(Observable.from([todo]));
         component.add();
         expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
    })

//     it('should set the message prperty if server returns an error when adding a ne to do',()=>{
//         let todo ={id:1}
//          let spy = spyOn(service,'add').and.returnValue(Observable.throw(console.error();
//          ));
//          component.add();
//          expect(Component.message).toBe(error);
//     })

 });