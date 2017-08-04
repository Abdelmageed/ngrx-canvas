import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { RectanglesService } from "../services/rectangles.service";
import { Store } from "@ngrx/store";
import { State } from '../reducers';
import { DrawRectangleAction } from '../actions/rectangles';
import { Rectangle } from "../models/rectangle";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  constructor(private rectanglesService: RectanglesService, private store: Store<State>) {
    this.store.select(s => s.rectangles) 
      .subscribe(rects => this.rectangles = rects.rectangles);
   }
  
  title = 'NGRX Canvas';
  @ViewChild('canvas') canvasRef: ElementRef;
  rectangles: Rectangle[]

  ngAfterViewInit() {
    const canvas: HTMLCanvasElement = this.canvasRef.nativeElement;
    this.rectanglesService.ctx = canvas.getContext('2d');
    
  }

  drawRectangle () {
    this.store.dispatch(new DrawRectangleAction());
  }


  //what now?
  //Action spawn rectangle
  //draws a rectangle at some random point with some random size and color
  //save it in the store: rectangles: Rectangle[]
  //Rectangle {x, y, width, height, color}

}
