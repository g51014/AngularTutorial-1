import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCreateCardComponent } from './todo-create-card.component';

describe('TodoCreateCardComponent', () => {
  let component: TodoCreateCardComponent;
  let fixture: ComponentFixture<TodoCreateCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoCreateCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCreateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
