import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseBottonComponent } from './close-botton.component';

describe('CloseBottonComponent', () => {
  let component: CloseBottonComponent;
  let fixture: ComponentFixture<CloseBottonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseBottonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseBottonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
