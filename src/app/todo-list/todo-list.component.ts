import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() public allTodos!: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo){
    this.todoService.deleteTodo(todo);
    this.allTodos = this.todoService.getTodos();
  }

}
