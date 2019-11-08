import { Todo } from 'src/app/interface/todo.class';
import { TodoService } from './../../service/todo/todo.service';
import { Component, OnInit } from '@angular/core';
import { TODO_DEFAULT } from 'src/app/utility/default';

@Component({
  selector: 'app-todo-create-card',
  templateUrl: './todo-create-card.component.html',
  styleUrls: ['./todo-create-card.component.scss']
})
export class TodoCreateCardComponent implements OnInit {

  constructor(
    public $todo: TodoService
  ) { }
  public todo: Todo = TODO_DEFAULT;
  public todos: Todo[];

  public setTodo(prop: string, value: string) {
    this.todo = { ...this.todo, ...{ [prop]: value } };
  }

  public createTodo() {
    this.todo = { ...this.todo, ...{ id: this.todos.length } };
    this.$todo.updateTodo.next(this.todo);
  }
  ngOnInit() {
    this.$todo.todo$.subscribe(
      (todos: Todo[]) => this.todos = todos
    );
  }

}
