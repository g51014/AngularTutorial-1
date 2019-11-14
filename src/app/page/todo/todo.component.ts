import { TODO_STATUS } from './../../utility/constants';
import { TodoService } from './../../service/todo/todo.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, withLatestFrom, mergeMap, startWith } from 'rxjs/operators';

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

  public todo$ = this.$todo.todo$.pipe(
    mergeMap(
      _ => this.todoFilter$, (todo, filter) => {
        console.log(todo, filter);
        return todo;
      }
    ),
    takeUntil(this.onDestory$)
  );

  private todoFilter = new Subject();
  private todoFilter$ = this.todoFilter.asObservable().pipe(startWith('done'), takeUntil(this.onDestory$));

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
