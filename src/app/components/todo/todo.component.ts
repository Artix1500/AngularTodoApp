import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ToDo } from '../../models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo: ToDo;

  @Output() removeToDo = new EventEmitter<number>();
  @Output() doneToDo = new EventEmitter<ToDo>();

  constructor() { }

  ngOnInit(): void {
  }

}
