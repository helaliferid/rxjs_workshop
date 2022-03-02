import { buffer, bufferTime, from, fromEvent, map, Observable } from 'rxjs';


const render = anchor => list => {
    anchor.innerHTML = JSON.stringify(list);
}

const init = () => {
    let output = document.querySelector('#output');
    let addAccountButton = document.querySelector('#addAccount');
    let removeAccountButton = document.querySelector('#removeAccount');
    let clearAccountListButton = document.querySelector('#cleanUpAccountList');
    return {
        output,
        addAccountButton,
        removeAccountButton,
        clearAccountListButton
    }

}



const localStorageStream$ = new Observable(subscriber=>{
    subscriber.next(JSON.parse(localStorage.getItem('list')))
})



const saveAccount = (account) => {
    let list = JSON.parse(localStorage.getItem('list')) || [];
    list.push(account);
    localStorage.setItem('list', JSON.stringify(list))
}

const removeAccount = (id) => {
    let list = JSON.parse(localStorage.getItem('list'));
    list = list.filter(a => a.id !== id);
    localStorage.setItem('list', JSON.stringify(list))
}

const controls = init()

const addAccountButtonSource$ = fromEvent(controls.addAccountButton, 'click')
const removeAccountButtonSource$ = fromEvent(controls.removeAccountButton, 'click')
const clearAccountListButtonSource$ = fromEvent(controls.clearAccountListButton, 'click')


const addAccountSubscription = addAccountButtonSource$.subscribe({
    next: data => saveAccount({ id: 2, code: '401', label: 'Fournisseurs' })
});

const removeAccountSubscription = removeAccountButtonSource$.subscribe({
    next: (data) => {
        removeAccount(2)
    }
})
const clearAccountSubscription = clearAccountListButtonSource$.subscribe({
    next: data => localStorage.setItem('list', '[]')
})


localStorageStream$.
    subscribe({
        next: data => {
            console.log(data)
            render(controls.output)(data)
        }
    })