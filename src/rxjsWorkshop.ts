import { first, map, Observable, take } from "rxjs";



const source$ = new Observable((subscriber) => {
    setTimeout(function () {
        subscriber.next('tunis')
    }, 1000
    );

    setTimeout(function () {
        subscriber.next('dakar');
    }, 2000);

    setTimeout(function () {
        subscriber.next('alger');
    }, 8000);

    setTimeout(function () {
        subscriber.next('rabat')
    }, 5000)

});

console.log('begin')

const subscription_one = source$.pipe(
    map(data => data.toUpperCase()),
    take(2))
    .subscribe({
        next: (data) => {
            console.log(data);
        },
        error: (error) => {
            console.error(error)
        },
        complete: () => {
            console.log('completed')
        }
    });

console.log('fin')