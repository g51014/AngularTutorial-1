import { TODO_STATUS } from './../../utility/constants';
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

  public TODO_STATUS = Object.keys(TODO_STATUS);
  public updateStatus( status: 'done' | 'todo' | 'inprogress') {
    this.todo.status = status;
    console.log(this.todo);
    // this.$todo.updateTodo.next(this.todo);
  }

  ngOnInit() {
  }


}
