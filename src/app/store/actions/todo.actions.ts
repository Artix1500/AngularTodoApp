// Section 1
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { ToDo } from '../../models/todo.model'

// Section 2
export const ADD_TODO           = '[ADD_TODO] Add'
export const REMOVE_ADD_TODO    = '[ADD_TODO] Remove'
export const DONE_TODO          = '[DONE_TODO] Done'

// Section 3
export class AddToDo implements Action {
    readonly type = ADD_TODO

    constructor(public payload: ToDo) {}
}

export class RemoveToDo implements Action {
    readonly type = REMOVE_ADD_TODO

    constructor(public payload: number) {}
}

export class DoneToDo implements Action {
    readonly type = DONE_TODO

    constructor(public payload: ToDo) {}
}

// Section 4
export type Actions = AddToDo | RemoveToDo | DoneToDo