import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ToDo } from '../../models/todo.model';
import { AppState } from '../../app.state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  todos$: Observable<ToDo[]>;
  
  constructor(private store: Store<{todo: ToDo[]}>) {
    this.todos$ = this.store.pipe(select("todo"));// .select();
   }

  ngOnInit(): void {
  }

}
