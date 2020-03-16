import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ToDo } from '../../models/todo.model';
import * as ToDoActions from '../../store/actions/todo.actions';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private store: Store<{ todo: ToDo[] }>) { }

  addToDo(name, priority) {
    this.store.dispatch(new ToDoActions.AddToDo({id: uuidv4(), name: name, priority: priority, done: false}) )
  }
  ngOnInit(): void {
  }

}
