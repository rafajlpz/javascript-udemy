'use strict';

const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const contenido = document.querySelector('.contenido');

const numeroSecreto = Math.floor(Math.random() * 80) + 1;
console.log(numeroSecreto);

const vidas = Number(document.querySelector('.score').textContent);


btnCheck.onclick = () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = `🚫 Introduce un numero!!`;
  } else if (guess === numeroSecreto) {
    document.querySelector('.number').textContent = guess;
    document.querySelector('.adivina').textContent = `✨ Acertaste!!!`;
    contenido.style.backgroundColor = `green`;
  } else if (guess !== numeroSecreto) {
    document.querySelector('.adivina').textContent = `Intentalo otra vez...`;
    contenido.style.backgroundColor = `red`;
    // btnCheck.className.disabled;
  }
};

btnAgain.onclick = () => {
  location.reload();
};
