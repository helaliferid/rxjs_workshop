import { fromEvent } from 'rxjs';
import { pip } from 'rxjs';
import { map } from 'rxjs'

// get The Canvas node
const canvas=document.querySelector('#canvas');
const ctx = canvas.getContext('2d');




const source$ = fromEvent(document, 'mousemove');

source$.pipe(
    map(
        pointerEvent => {
            return ({
                x: pointerEvent.clientX,
                y: pointerEvent.clientY
            });
        }
    )).subscribe({
        next: point =>{
            console.log(point)
            ctx.beginPath();
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 5;
            ctx.moveTo(point.x, point.y);
            ctx.arcTo(point.x,point.y, 2,10,10);
            ctx.stroke();
           
        }
    })  