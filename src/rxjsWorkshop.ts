import { BehaviorSubject, first, map, Observable, take } from "rxjs";



const source$ = new BehaviorSubject((subscriber) => {
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

const subscription_one = source$.subscribe({
        next: (data) => {
            console.log('from observer 3')
            console.log(data);
        },
        error: (error) => {
            console.error(error)
        },
        complete: () => {
            console.log('completed')
        }
    });

const subscription_two = source$.subscribe({
        next: (data) => {
            console.log('from observer 2')
            console.log(data);
        },
        error: (error) => {
            console.error(error)
        },
        complete: () => {
            console.log('completed')
        }
    });

setTimeout(
    function () {
        source$ .subscribe({
            next: (data) => {
                console.log('from observer 3 after 10s')
                console.log(data.value);
            },
            error: (error) => {
                console.error(error)
            },
            complete: () => {
                console.log('completed')
            }
        });
    }, 10000)




console.log('fin')