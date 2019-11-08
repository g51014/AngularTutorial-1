import { Todo } from './../../interface/todo.class';
import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { startWith, scan, tap, map, mergeMap } from 'rxjs/operators';
import { TODO_DEFAULT } from 'src/app/utility/default';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
  public todo = new Subject<Todo[] | Todo>();
  public todo$: Observable<Todo[] | Todo> = this.todo.asObservable().pipe(
    startWith([])
  );

  public updateTodo = new Subject<Todo>();
  public updateTodo$ = this.updateTodo.asObservable().pipe(
    // tslint:disable-next-line: deprecation
    mergeMap(
      _ => this.todo$, (update: Todo, todos: Todo[]) => {
        const exist = this.findTodoinTodos(update, todos);
        !!exist ? todos = this.modifyTodos(todos, update) : todos = this.addTodos(todos, update);
        return todos;
      }
    ),
    tap(_ => console.log('update', _))
  );

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
