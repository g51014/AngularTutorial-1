import { TodoService } from './../../service/todo/todo.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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
    takeUntil(this.onDestory$)
  );

  ngOnDestroy() {
    this.onDestory.next('');
  }
  ngOnInit() {
  }

}
