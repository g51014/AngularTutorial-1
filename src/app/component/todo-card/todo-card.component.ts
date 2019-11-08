import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from 'src/app/service/todo/todo.service';
import { Todo } from 'src/app/interface/todo.class';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {

  @Input() public todo;

  constructor(
    public $todo: TodoService
  ) { }

  ngOnInit() {
    console.log(this.todo)
    this.$todo.updateTodoStatus$.subscribe()
  }

  public addTodo(todo:Todo) {
    this.$todo.todo.next(todo)
  }

  public updateTodo(todo:Todo) {

  }

}
