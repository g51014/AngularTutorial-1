import { Todo } from './../../interface/todo.class';
import { Subject, Observable, ReplaySubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { startWith, scan, tap, map, mergeMap, combineLatest, take } from 'rxjs/operators';
import { TODO_DEFAULT } from 'src/app/utility/default';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  public removeTodo = new Subject<number>();
  public removeTodo$ = this.removeTodo.asObservable().pipe(startWith(null));

  public updateTodo = new Subject<Todo>();
  public updateTodo$ = this.updateTodo.asObservable().pipe(startWith(null));

  private lastUpdate = null;

  public todo = new ReplaySubject<Todo[]>();
  public todo$: Observable<Todo[]> = this.todo.asObservable().pipe(
    startWith([]),
    // tslint:disable-next-line: deprecation
    combineLatest(this.removeTodo$, this.updateTodo$, (todos: Todo[], removeID: number, update: Todo) => {
      this.lastUpdate !== update ? todos = this.updateTodos(update, todos) : todos = this.removedTodos(removeID, todos);
      this.lastUpdate = update;
      return todos;
    })
  );

  private removedTodos(removeID: number, todos: Todo[]): Todo[] {
    const removeIndex = todos.findIndex(todo => todo.id === removeID);
    if (removeIndex > -1) { todos.splice(removeIndex, 1); }
    return todos;
  }

  private updateTodos(update: Todo, todos: Todo[]): Todo[] {
    const exist = this.findTodoinTodos(update, todos);
    !!exist ? todos = this.modifyTodos(todos, update) : todos = this.addTodos(todos, update);
    return todos;
  }

  private findTodoinTodos(target: Todo, todos: Todo[]): Todo {
    return todos.find((todo: Todo) => todo.id === target.id);
  }

  private modifyTodos(todos: Todo[], update: Todo): Todo[] {
    todos.map(
      (todo: Todo, index: number) => todo.id === update.id ? todos[index] = update : null
    )
    return todos;
  }

  private addTodos(todos: Todo[], todo: Todo): Todo[] {
    todos.push(todo);
    todos.sort((a, b) => a.id - b.id);
    return todos;
  }
}
