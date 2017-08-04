import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import * as rectangle from '../actions/rectangles';
import { RectanglesService } from '../services/rectangles.service';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable()
export class RectangleEffects {

    constructor(private rectangleService: RectanglesService, private actions$: Actions) {}
    
    @Effect() draw$ = this.actions$
        .ofType(rectangle.DRAW_RECTANGLE)
        .switchMap(() => this.rectangleService.draw())
        .map((r) => new rectangle.AddRectangleAction(r));
}
