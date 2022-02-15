import { fromEvent } from 'rxjs';
import { pip } from 'rxjs';
import { map } from 'rxjs'

// get The Canvas node
const canvas=document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const radius = 12




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
            ctx.fillStyle = 'blue';
            ctx.arc(point.x, point.y, radius, 0 * Math.PI, 2 * Math.PI);
            ctx.fill();
           
        }
    })  

