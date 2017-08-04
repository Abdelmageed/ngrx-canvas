import { Injectable} from '@angular/core';
import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of';
import { Rectangle } from '../models/rectangle';

@Injectable()
export class RectanglesService {

    public ctx: CanvasRenderingContext2D;

    //needs to generate the random point, dims, and color
    //has the canvas context to draw the rectangle
    //returs an observable of the randomly generated rectangle instance
    //pass the canvas context in an effect? export & provide it?
    //Check out the renderer
    draw (): Observable<Rectangle> {
        
        const rect = this.makeRandomRectangle();
        
        this.ctx.fillStyle = rect.color;
        this.ctx.fillRect(rect.x, rect.y, rect.width, rect.height);

        return of(rect); 
    }


    makeRandomRectangle (): Rectangle {
        //rand x, y
        //check canvas' width and height
        //rect width [10, WIDTH - x] height [10, HEIGHT - y]
        const WIDTH = this.ctx.canvas.width;
        const HEIGHT = this.ctx.canvas.height;
        
        const x = Math.random() * (WIDTH - 10);
        const y = Math.random() * (HEIGHT - 10);
        const width = Math.random() * (WIDTH - x - 10) + 10;
        const height = Math.random() * (HEIGHT - x - 10) + 10;
        const randByte = () => Math.floor(Math.random() * 255);
        const color = `rgba(${randByte()},${randByte()},${randByte()},${Math.random()})`;
        return {x, y, width, height, color}; 
    }
}