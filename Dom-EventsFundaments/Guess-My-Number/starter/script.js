'use strict';

const parrafo = document.querySelector('.message').textContent;

console.log(parrafo);

const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector(".again")

btnCheck.onclick = () =>{
    let adivina = [];
    for(let i = 0; adivina>1 && adivina<=20; i++){
        adivina.push(i);
    }
};

btnAgain.onclick = () =>{
    console.log("Funciona sgfdsfsa")
};

const dameNumero = () =>{
    
}