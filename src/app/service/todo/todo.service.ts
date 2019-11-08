import { Todo } from './../../interface/todo.class';
import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { startWith, scan, tap, map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
  private TODO_DEFAULT: Todo = {
    id: 0,
    title: 'test',
    content: 'test',
    status: 'todo'
  }
  public todo = new Subject<Todo[] | Todo>();
  public todo$: Observable<Todo[] | Todo> = this.todo.asObservable().pipe(
    startWith([this.TODO_DEFAULT])
  );
  public updateTodoStatus$ = this.todo.asObservable().pipe(
    mergeMap(
      _ => this.todo$ , (todos:Todo[], update:Todo) => {
        // return update
      }
    ),
    tap(_ => console.log('aaa',_))
  );


}
