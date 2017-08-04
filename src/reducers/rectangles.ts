import { Rectangle } from '../models/rectangle';
import * as rectangle from '../actions/rectangles';

export interface State {
    rectangles: Rectangle[]
}

export const initialState = {
    rectangles: []
};

export function reducer(state = initialState, action: rectangle.Actions): State {
    switch (action.type) {

        case rectangle.ADD_RECTANGLE:
            return {rectangles: state.rectangles.concat(action.paylod)};

        default:
            return state;
    }
}