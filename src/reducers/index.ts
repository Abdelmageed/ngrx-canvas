import * as fromRectangles from './rectangles';

export interface State {
    rectangles: fromRectangles.State
}

export const initialState = {
    rectangles: fromRectangles.initialState
};

export const reducers = {
    rectangles: fromRectangles.reducer
};

