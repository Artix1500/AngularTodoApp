import { Action } from '@ngrx/store'
import { ToDo } from '../../models/todo.model'
import * as ToDoActions from './../actions/todo.actions'

// Section 1
const initialState: ToDo = {
    id: 1,
    name: "Fix car",
    priority: 10,
    done: false
}

// Section 2
export function reducer(state: ToDo[] = [initialState], action: ToDoActions.Actions) {

    // Section 3
    switch (action.type) {
        case ToDoActions.ADD_TODO:
            return [...state, action.payload];

        case ToDoActions.REMOVE_ADD_TODO:
            return state.filter(x => x.id !== action.payload);

        case ToDoActions.DONE_TODO:
            return state.map(x => {
                if (x.id === action.payload.id) {
                    x.done = !x.done;
                }
                return x;
            })
        default:
            return state;
    }
}