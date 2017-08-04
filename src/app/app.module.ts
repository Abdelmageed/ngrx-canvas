import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { RectanglesService } from "../services/rectangles.service";
import * as fromRoot from '../reducers';
import { RectangleEffects } from "../effects/rectangle";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(fromRoot.reducers, {initialState: fromRoot.initialState}),
    EffectsModule.forRoot([RectangleEffects])
  ],
  providers: [RectanglesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
