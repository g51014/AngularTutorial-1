import { Todo } from './../../interface/todo.class';
import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  public todo = new Subject<Todo>();
  public todo$ = this.todo.asObservable().pipe(startWith([{
    title: 'test',
    content: 'test',
    status: 'todo'
  }]));
}
