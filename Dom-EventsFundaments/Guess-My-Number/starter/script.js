'use strict';

const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const contenido = document.querySelector('.contenido');

let numeroSecreto = Math.floor(Math.random() * 80) + 1;
console.log(numeroSecreto);

const creadorTexto = mensaje => {
  document.querySelector('.adivina').textContent = mensaje;
};
const cajaNum = () => {
  document.querySelector('.number').textContent = numeroSecreto;
};

let vidas = 5;
let aciertos = 0;

btnCheck.onclick = () => {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    creadorTexto(`🚫 Introduce un numero!!`);
  } else if (guess === numeroSecreto) {
    creadorTexto(`✨ Acertaste!!!`);
    cajaNum();
    contenido.style.backgroundColor = `green`;
    aciertos++;
    document.querySelector('.highscore').textContent = aciertos;
  } else if (guess !== numeroSecreto) {
    if (vidas > 1) {
      creadorTexto(guess > numeroSecreto ? `Te pasaste...` : `Es mas alto...`);
      vidas--;
      document.querySelector('.score').textContent = vidas;
    } else {
      cajaNum();
      document.querySelector('.score').textContent = 0;
      contenido.style.backgroundColor = `red`;
      creadorTexto(`💥 Perdiste...!!`);
    }
  }
};

btnAgain.onclick = () => {
  numeroSecreto = Math.floor(Math.random() * 80) + 1;
  console.log(numeroSecreto);
  vidas = 5;

  creadorTexto( `Adivina Mi Numero!`);
  document.querySelector('.number').textContent = `?`;
  Number((document.querySelector('.guess').value = ''));
  document.querySelector('.score').textContent = vidas;

  contenido.style.backgroundColor = `#222`;
};
