import { TodoService } from './../../service/todo/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(
    public $todo: TodoService
  ) { }

  ngOnInit() {
  }

}
