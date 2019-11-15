import { TODO_STATUS } from './../../utility/constants';
import { TodoService } from './../../service/todo/todo.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, withLatestFrom, mergeMap, startWith, combineLatest } from 'rxjs/operators';
import { Todo } from 'src/app/interface/todo.class';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnDestroy {

  constructor(
    private $todo: TodoService
  ) { }

  private onDestory = new Subject();
  private onDestory$ = this.onDestory.asObservable();

  private todoFilter = new Subject();
  public todoFilter$ = this.todoFilter.asObservable().pipe(startWith(' '), takeUntil(this.onDestory$));

  public todo$ = this.$todo.todo$.pipe(
    combineLatest(
      this.todoFilter$, (todos: Todo[], filter: string) => {
        const todoFilter = (filter !== ' ') ? todos.filter(todo => todo.status === filter) : todos;
        return todoFilter;
      }
    ),
    takeUntil(this.onDestory$)
  );


  public todoStatus = Object.keys(TODO_STATUS);
  public TODO_STATUS = TODO_STATUS;

  public filter(key: 'done' | 'todo' | 'inprogress') {
    this.todoFilter.next(key);
  }

  ngOnDestroy() {
    this.onDestory.next('');
  }
  ngOnInit() {
  }

}
