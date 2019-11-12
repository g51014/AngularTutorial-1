import { Todo } from 'src/app/interface/todo.class';
import { TodoService } from './../../service/todo/todo.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { TODO_DEFAULT } from 'src/app/utility/default';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-todo-create-card',
  templateUrl: './todo-create-card.component.html',
  styleUrls: ['./todo-create-card.component.scss']
})
export class TodoCreateCardComponent implements OnInit, OnDestroy {
  constructor(
    public $todo: TodoService
  ) { }
  public todo: Todo = TODO_DEFAULT;

  private onDestroy = new Subject();
  private OnDestroy$ = this.onDestroy.asObservable();

  private nextId$ = this.$todo.nextId$.pipe(takeUntil(this.OnDestroy$));
  private lastestID: number;

  public setTodo(prop: string, value: string) {
    this.todo = { ...this.todo, ...{ [prop]: value } };
  }

  public createTodo() {
    this.todo = { ...this.todo, ...{ id: this.lastestID } };
    this.$todo.updateTodo.next(this.todo);
    this.$todo.nextId.next(this.lastestID + 1);
  }

  ngOnInit() {
    this.nextId$.subscribe(
      id => {
        this.lastestID = id;
        this.todo = TODO_DEFAULT;
      }
    );
  }
  ngOnDestroy() {
    this.onDestroy.next('');
  }
}
