import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  public todo = new Subject();
  public todo$ = this.todo.asObservable();
}
