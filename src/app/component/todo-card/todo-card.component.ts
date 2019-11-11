import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from 'src/app/service/todo/todo.service';
import { Todo } from 'src/app/interface/todo.class';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {

  @Input() public todo?: Todo;

  constructor(
    public $todo: TodoService
  ) { }

  public test: Todo = {
    id: 1,
    title: 'test',
    content: 'test',
    status: 'done'
  };

  ngOnInit() {
  }


}
