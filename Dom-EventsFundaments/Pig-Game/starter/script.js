'use strict';
const rolldice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const newgame = document.querySelector('.btn--new');
const dado = document.querySelector('.dice');

const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');

dado.classList.add('hidden');


const numeroAleatorio = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const tirarDado = rolldice.onclick = () => {
  score0.textContent = numeroAleatorio();
  
};


if(tirarDado === 1){
    // cambiar de jugador
}