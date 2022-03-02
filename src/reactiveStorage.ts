import { from, fromEvent } from 'rxjs';


const render = anchor => list => {
    anchor.innerHTML = `${JSON.stringify(list, undefined, 3)}`
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



const localStorageinitStream =()=>{
 return from(localStorage.getItem('list')?localStorage.getItem('list'):'[]');
}

    



const saveAccount = (account) => {
    let list=JSON.parse(localStorage.getItem('list')) || [];
    list.push(account);
    localStorage.setItem('list', JSON.stringify(list))
}

const removeAccount = (id) => {
    let list=JSON.parse(localStorage.getItem('list'));
    list = list.filter(a => a.id !== id);
    localStorage.setItem('list', JSON.stringify(list))
}

const controls = init()

const addAccountButtonSource$ = fromEvent(controls.addAccountButton, 'click')
const removeAccountButtonSource$ = fromEvent(controls.removeAccountButton, 'click')
const clearAccountListButtonSource$ = fromEvent(controls.clearAccountListButton, 'click')


const addAccountSubscription = addAccountButtonSource$.subscribe({
    next: data => saveAccount({id:2,code:'401',label:'Fournisseurs'})
});

const removeAccountSubscription = removeAccountButtonSource$.subscribe(console.log)
const clearAccountSubscription = clearAccountListButtonSource$.subscribe(console.log)


localStorageStream$.subscribe({
    next: data =>{
        console.log(data)
        render(controls.output)(data)
    }
})