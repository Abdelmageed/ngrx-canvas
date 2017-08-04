import { Action } from '@ngrx/store';
import { Rectangle } from "../models/rectangle";

export const DRAW_RECTANGLE = '[Rectangles] DRAW_RECTANGLE';
export const ADD_RECTANGLE = '[Rectangle] ADD_RECTANGLE';

export class DrawRectangleAction implements Action {
    constructor() {}

    readonly type = DRAW_RECTANGLE;
}

export class AddRectangleAction implements Action {
    constructor(public paylod: Rectangle) {}

    readonly type = ADD_RECTANGLE;
}

export type Actions = 
                        DrawRectangleAction
                    |   AddRectangleAction;