import { fromEvent } from 'rxjs';
import { pip } from 'rxjs';
import { map } from 'rxjs'



const source$ = fromEvent(document, 'mousemove');

source$.pipe(
    map(
        pointerEvent => {
            return ({
                x: pointerEvent.x,
                y: pointerEvent.y
            });
        }
    ),map(point =>{
        return ({
            x:- point.x,
            y: point.y
        })
    })).subscribe({
        next: data=>{
            console.log(data)
        }
    })  