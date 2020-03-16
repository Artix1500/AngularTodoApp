import { ToDo } from './models/todo.model';

export interface AppState {
  readonly ToDo: ToDo[];
}