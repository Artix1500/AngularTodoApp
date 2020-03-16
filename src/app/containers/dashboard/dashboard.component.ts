import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ToDo } from '../../models/todo.model';
import * as ToDoActions from '../../store/actions/todo.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  todos$: Observable<ToDo[]>;

  constructor(private store: Store<{ todo: ToDo[] }>) {
    this.todos$ = this.store.pipe(select("todo"));// .select();
  }

  removeToDo(id) {
    this.store.dispatch(new ToDoActions.RemoveToDo(id) )
  }

  doneToDo(todo) {
    this.store.dispatch(new ToDoActions.DoneToDo(todo) )
  }

  ngOnInit(): void {
  }

}
