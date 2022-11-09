import { Component } from '@angular/core';
import { TodoService } from './todo.service';
@Component({
    selector: 'todo-root',
    template: `<p>hello</p>`,
    styles: ['p { color: green; }']

  })
  
export class TodosComponent{
    todos: any[]= [];
    message:any;

    constructor(private service: TodoService){}
    ngOnInit(){
        this.service.getTodos().subscribe((t:any)=>this.todos =t)
    }
    add(){
        var newTodo = { title:'...'};
        this.service.add(newTodo).subscribe(
            (t: any) => this.todos.push(t),
            (err: any) => this.message = err);
    }
    delete(id:any){
        if(confirm('Are you sure?'))
        this.service.delete(id).subscribe();
    }
}