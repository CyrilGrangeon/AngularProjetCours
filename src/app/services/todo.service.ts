import { Injectable } from '@angular/core';
import { Todo } from 'src/models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [];
  constructor() { }

createTodo(todo: Todo){
  const NEWTODO = { id: Date.now(), ...todo};
  this.todos= [NEWTODO, ...this.todos];
  //console.log(this.todos);
}

getTodos() {
  return this.todos;
}

deleteTodo(todo: Todo){
  this.todos = this.todos.filter(item => item.id !== todo.id);
}

}
