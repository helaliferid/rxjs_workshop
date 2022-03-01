import { from, Observable } from 'rxjs';
const render=(anchor,list)=>{
 anchor.innerHTML = `${JSON.stringify(list,undefined,3)}`
}

const init=()=>{
   let output=document.querySelector('#output');
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

const initState =()=>{
    return [{code:'411',label:'client'}]
}


const localStorageStream$ = ():Observable<any>=>{
    return from(JSON.parse(localStorage.getItem('list')))
}

const addAccount = (account,list) =>{ 
    return list.push(account)
}


const controls=init()

console.log(controls)