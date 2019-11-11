import { Todo } from 'src/app/interface/todo.class';
import { TodoService } from './../../service/todo/todo.service';
import { Component, OnInit, Input } from '@angular/core';
import { TODO_DEFAULT } from 'src/app/utility/default';

@Component({
  selector: 'app-todo-create-card',
  templateUrl: './todo-create-card.component.html',
  styleUrls: ['./todo-create-card.component.scss']
})
export class TodoCreateCardComponent implements OnInit {

  @Input() public todos: Todo[];

  constructor(
    public $todo: TodoService
  ) { }
  public todo: Todo = TODO_DEFAULT;
  private lastestID: number;
  public setTodo(prop: string, value: string) {
    this.todo = { ...this.todo, ...{ [prop]: value } };
  }

  public createTodo() {
    this.todo = { ...this.todo, ...{ id: this.lastestID } };
    this.lastestID = this.lastestID + 1;
    this.$todo.updateTodo.next(this.todo);
  }
  ngOnInit() {
    this.lastestID = this.todos.length;
  }

}
