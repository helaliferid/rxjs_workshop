import * as bootstrap from 'bootstrap'
import { fromEvent, map, Observable } from 'rxjs';
import { User } from './shell/user.model';

let userModel: User = {};

// DOM Elements - declaration
let buttonElement: HTMLButtonElement;
let emailInput: HTMLInputElement;
let passwordInput: HTMLInputElement;

// DOM elements - assignation
buttonElement = document.getElementById("submit") as HTMLButtonElement;
emailInput = document.getElementById("email") as HTMLInputElement;
passwordInput = document.getElementById("password") as HTMLInputElement;
let badge:HTMLElement = document.querySelector('#badge') 

// DOM events as Observables - declaration
let emailChange$: Observable<InputEvent>;
let passwordChange$: Observable<InputEvent>;
let submit$: Observable<MouseEvent>;


const renderUser = (user:User,anchor)=>{
  anchor.innerHTML= `${JSON.stringify(user,undefined,3)}`;
}

// DOM events as Observables - assignation
emailChange$ = fromEvent<InputEvent>(emailInput, "input");
passwordChange$ = fromEvent<InputEvent>(passwordInput, "input");
submit$ = fromEvent<MouseEvent>(buttonElement, "click");

emailChange$
  .pipe(map((event: InputEvent) => (event.target as HTMLInputElement).value))
  .subscribe(email => {
    console.log("email Value: ", email);
    userModel.email = email;
    renderUser(userModel,badge)
  });

  passwordChange$
  .pipe(map((event: InputEvent) => (event.target as HTMLInputElement).value))
  .subscribe(password => {
    console.log("password Value:", password);
    userModel.password = password;
    renderUser(userModel,badge)
  });