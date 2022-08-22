'use strict';

const rolldice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const newgame = document.querySelector('.btn--new');
const dado = document.querySelector('.dice');

const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');

const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');

const jugador0 = document.querySelector('.player--0');
const jugador1 = document.querySelector('.player--1');

const scores = [0, 0];
let currentScore = 0;
let jugadorActivo = 0;

score0.textContent = 0;
score1.textContent = 0;
dado.classList.add('hidden');

rolldice.onclick = () => {
  // -> Generamos numero aleatorio al tirar el dado <-- //
  const numeroAleatorio = Math.floor(Math.random() * 6) + 1;

  // -> Agregamos el display para que aparezca el dado y la imagen correspondiente <-- //
  dado.classList.remove('hidden');
  dado.src = `dice-${numeroAleatorio}.png`;

  // -> Creamos las condiciones <-- //
  if (numeroAleatorio !== 1) {
    currentScore = currentScore + numeroAleatorio;
    //  -> Seleccionamos el cuadro de current correspondiente de forma dinamica <- //
    document.getElementById(`current--${jugadorActivo}`).textContent =
      currentScore;
  } else {
    // -> Cambiar de jugador y reseteo<-- //
    document.getElementById(`current--${jugadorActivo}`).textContent = 0;
    currentScore = 0;
    jugadorActivo = jugadorActivo === 0 ? 1 : 0;
    // -> Si esta la clase la elimina, sino la agrega <- //
    jugador0.classList.toggle('player--active');
    jugador1.classList.toggle('player--active');
  }
};
hold.onclick = () => {
  score0.textContent = current0.textContent;
};
