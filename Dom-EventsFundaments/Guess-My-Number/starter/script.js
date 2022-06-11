'use strict';

const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const contenido = document.querySelector('.contenido');

const numeroSecreto = Math.floor(Math.random() * 80) + 1;
console.log(numeroSecreto);

let vidas = 5;

btnCheck.onclick = () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = `🚫 Introduce un numero!!`;
  } else if (guess === numeroSecreto) {
    document.querySelector('.adivina').textContent = `✨ Acertaste!!!`;
    contenido.style.backgroundColor = `green`;
  } else if (guess > numeroSecreto) {
    if (vidas > 1) {
      document.querySelector('.adivina').textContent = `Te pasaste...`;
      vidas--;
      document.querySelector('.score').textContent = vidas;
    } else {
      document.querySelector('.adivina').textContent = `💥 Perdiste...!!!`;
      document.querySelector('.score').textContent = 0;
      contenido.style.backgroundColor = `red`;
    }
  } else if (guess < numeroSecreto) {
    if (vidas > 1) {
      document.querySelector('.adivina').textContent = `Es mas alto...`;
      vidas--;
      document.querySelector('.score').textContent = vidas;
    } else {
      document.querySelector('.adivina').textContent = `💥 Perdiste...!!!`;
      document.querySelector('.score').textContent = 0;
      contenido.style.backgroundColor = `red`;
    }
  }
};

btnAgain.onclick = () => {
  location.reload();
};
