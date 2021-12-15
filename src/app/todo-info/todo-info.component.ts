import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/models/todo';

@Component({
  selector: 'app-todo-info',
  templateUrl: './todo-info.component.html',
  styleUrls: ['./todo-info.component.css']
})

export class TodoInfoComponent implements OnInit {

  @Input() todo!: Todo;
  @Output() deleteTodo = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
    
  delete(todo: Todo) {
    this.deleteTodo.emit(todo);
  }

}
