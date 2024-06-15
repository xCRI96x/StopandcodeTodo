import { Component } from '@angular/core';
import { Todo } from '../../models/todo';
import { TODOS } from '../../Json/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  todos: Todo[] = TODOS;
}
