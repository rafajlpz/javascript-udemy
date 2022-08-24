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
let seguirJugando = true;

score0.textContent = 0;
score1.textContent = 0;
dado.classList.add('hidden');

const cambiarJugador = () => {
  // -> Cambiar de jugador y reseteo<-- //
  document.getElementById(`current--${jugadorActivo}`).textContent = 0;
  currentScore = 0;
  jugadorActivo = jugadorActivo === 0 ? 1 : 0;
  // -> Si esta la clase la elimina, sino la agrega <- //
  jugador0.classList.toggle('player--active');
  jugador1.classList.toggle('player--active');
};

rolldice.onclick = () => {
  if (seguirJugando) {
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
      cambiarJugador();
    }
  }
};
hold.onclick = () => {
  if (seguirJugando) {
    // 1 Agregar score actual al score del jugador activo
    scores[jugadorActivo] += currentScore;

    document.getElementById(`score--${jugadorActivo}`).textContent =
      scores[jugadorActivo];

    // 2 Checkear si el score del jugar es > o = a 100
    if (scores[jugadorActivo] >= 20) {
      // Acabar el juego
      seguirJugando = false;
    dado.classList.add('hidden');

      document
        .querySelector(`.player--${jugadorActivo}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${jugadorActivo}`)
        .classList.remove(`player--active`);
    } else {
      // Cambiar de jugador
      cambiarJugador();
    }
  }
};
